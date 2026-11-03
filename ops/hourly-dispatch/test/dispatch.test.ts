import assert from 'node:assert/strict';
import { test } from 'node:test';
import { DispatchError, dispatchWorkflow, readConfig, type FetchLike } from '../src/dispatch.js';
import worker from '../src/index.js';

const env = {
  GITHUB_TOKEN: 'test-token',
  GITHUB_REPOSITORY: 'austery/thought-foundry',
  GITHUB_WORKFLOW: 'deploy.yml',
  GITHUB_REF: 'main',
};

interface Call {
  url: string;
  init: RequestInit;
}

function recorder(responses: Array<Response | Error>): { fetch: FetchLike; calls: Call[] } {
  const calls: Call[] = [];
  const fetch: FetchLike = async (url, init) => {
    calls.push({ url, init });
    const next = responses.shift();
    if (next === undefined) throw new Error('unexpected extra request');
    if (next instanceof Error) throw next;
    return next;
  };
  return { fetch, calls };
}

const noSleep = async (): Promise<void> => {};

test('dispatches the deployment workflow on main with default inputs', async () => {
  const { fetch, calls } = recorder([new Response(null, { status: 204 })]);
  const result = await dispatchWorkflow(readConfig(env), { fetch, sleep: noSleep });

  assert.deepEqual(result, { status: 204, attempts: 1, runId: null });
  assert.equal(calls.length, 1);
  const call = calls[0]!;
  assert.equal(
    call.url,
    'https://api.github.com/repos/austery/thought-foundry/actions/workflows/deploy.yml/dispatches',
  );
  assert.equal(call.init.method, 'POST');
  assert.deepEqual(JSON.parse(String(call.init.body)), { ref: 'main' });
  const headers = call.init.headers as Record<string, string>;
  assert.equal(headers.Authorization, 'Bearer test-token');
  assert.equal(headers['X-GitHub-Api-Version'], '2022-11-28');
});

test('reports the run id when GitHub returns run details', async () => {
  const { fetch } = recorder([new Response('{"workflow_run_id":42}', { status: 200 })]);
  const result = await dispatchWorkflow(readConfig(env), { fetch, sleep: noSleep });
  assert.equal(result.runId, 42);
});

test('retries server errors and network failures, then succeeds', async () => {
  const { fetch, calls } = recorder([
    new Response('busy', { status: 502 }),
    new Error('connection reset'),
    new Response(null, { status: 204 }),
  ]);
  const result = await dispatchWorkflow(readConfig(env), { fetch, sleep: noSleep });
  assert.equal(result.attempts, 3);
  assert.equal(calls.length, 3);
});

test('fails immediately on authentication errors without retrying', async () => {
  const { fetch, calls } = recorder([new Response('{"message":"Bad credentials"}', { status: 401 })]);
  await assert.rejects(dispatchWorkflow(readConfig(env), { fetch, sleep: noSleep }), (error: unknown) => {
    assert.ok(error instanceof DispatchError);
    assert.equal(error.status, 401);
    assert.equal(error.attempts, 1);
    return true;
  });
  assert.equal(calls.length, 1);
});

test('retries 429 and rate-limit 403 responses', async () => {
  const { fetch, calls } = recorder([
    new Response('', { status: 429 }),
    new Response('{"message":"secondary rate limit"}', { status: 403, headers: { 'retry-after': '60' } }),
    new Response(null, { status: 204 }),
  ]);
  const result = await dispatchWorkflow(readConfig(env), { fetch, sleep: noSleep });
  assert.equal(result.attempts, 3);
  assert.equal(calls.length, 3);
});

for (const status of [403, 404, 422]) {
  test(`fails immediately on ${status} without rate-limit headers`, async () => {
    const { fetch, calls } = recorder([new Response('{"message":"no"}', { status })]);
    await assert.rejects(dispatchWorkflow(readConfig(env), { fetch, sleep: noSleep }), (error: unknown) => {
      assert.ok(error instanceof DispatchError);
      assert.equal(error.status, status);
      return true;
    });
    assert.equal(calls.length, 1);
  });
}

test('fails after exhausting retries on persistent server errors', async () => {
  const { fetch, calls } = recorder([
    new Response('', { status: 503 }),
    new Response('', { status: 503 }),
    new Response('', { status: 503 }),
  ]);
  await assert.rejects(dispatchWorkflow(readConfig(env), { fetch, sleep: noSleep }), DispatchError);
  assert.equal(calls.length, 3);
});

test('rejects missing or malformed settings before any request', () => {
  assert.throws(() => readConfig({ ...env, GITHUB_TOKEN: '' }), /GITHUB_TOKEN/);
  assert.throws(() => readConfig({ ...env, GITHUB_REPOSITORY: 'not a repo' }), /GITHUB_REPOSITORY/);
  assert.throws(() => readConfig({ ...env, GITHUB_WORKFLOW: '../deploy.yml' }), /GITHUB_WORKFLOW/);
});

test('scheduled handler rethrows so Cloudflare records the failed cron event', async () => {
  await assert.rejects(
    worker.scheduled({ scheduledTime: Date.UTC(2026, 10, 3, 14, 23), cron: '23 * * * *' }, { ...env, GITHUB_TOKEN: '' }),
    /GITHUB_TOKEN/,
  );
});
