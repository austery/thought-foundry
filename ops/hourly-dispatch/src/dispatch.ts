export interface DispatchConfig {
  token: string;
  repository: string;
  workflow: string;
  ref: string;
}

export interface DispatchResult {
  status: number;
  attempts: number;
  runId: number | null;
}

export type FetchLike = (url: string, init: RequestInit) => Promise<Response>;

export interface DispatchOptions {
  fetch: FetchLike;
  sleep?: (milliseconds: number) => Promise<void>;
  maxAttempts?: number;
  retryDelayMilliseconds?: number;
}

const repositoryPattern = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
const workflowPattern = /^[A-Za-z0-9_.-]+\.ya?ml$/;
const refPattern = /^[A-Za-z0-9_./-]+$/;

export class DispatchError extends Error {
  constructor(
    message: string,
    readonly status: number | null,
    readonly attempts: number,
  ) {
    super(message);
    this.name = 'DispatchError';
  }
}

export function readConfig(env: Record<string, unknown>): DispatchConfig {
  const value = (name: string, pattern?: RegExp): string => {
    const raw = env[name];
    if (typeof raw !== 'string' || raw.trim() === '') {
      throw new DispatchError(`Missing required setting ${name}`, null, 0);
    }
    if (pattern && !pattern.test(raw)) {
      throw new DispatchError(`Invalid setting ${name}`, null, 0);
    }
    return raw;
  };
  return {
    token: value('GITHUB_TOKEN'),
    repository: value('GITHUB_REPOSITORY', repositoryPattern),
    workflow: value('GITHUB_WORKFLOW', workflowPattern),
    ref: value('GITHUB_REF', refPattern),
  };
}

function isRetryable(status: number): boolean {
  return status === 429 || status >= 500;
}

function parseRunId(body: string): number | null {
  if (body === '') return null;
  try {
    const parsed: unknown = JSON.parse(body);
    if (typeof parsed === 'object' && parsed !== null && 'workflow_run_id' in parsed) {
      const id = (parsed as { workflow_run_id: unknown }).workflow_run_id;
      return typeof id === 'number' ? id : null;
    }
  } catch {
    return null;
  }
  return null;
}

/**
 * Request one workflow_dispatch run with the workflow's default inputs.
 * Retries only rate limits, server errors and network failures, because
 * authentication or validation failures will not succeed on repetition.
 */
export async function dispatchWorkflow(
  config: DispatchConfig,
  options: DispatchOptions,
): Promise<DispatchResult> {
  const sleep = options.sleep ?? ((ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms)));
  const maxAttempts = options.maxAttempts ?? 3;
  const retryDelay = options.retryDelayMilliseconds ?? 5000;
  const url = `https://api.github.com/repos/${config.repository}/actions/workflows/${config.workflow}/dispatches`;
  const init: RequestInit = {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${config.token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'thought-foundry-hourly-dispatch',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: JSON.stringify({ ref: config.ref }),
  };

  let lastFailure = 'no attempt made';
  let lastStatus: number | null = null;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    let response: Response;
    try {
      response = await options.fetch(url, init);
    } catch (error) {
      lastStatus = null;
      lastFailure = `network error: ${error instanceof Error ? error.message : String(error)}`;
      if (attempt < maxAttempts) await sleep(retryDelay * attempt);
      continue;
    }
    const body = await response.text();
    if (response.status === 204 || response.status === 200) {
      return { status: response.status, attempts: attempt, runId: parseRunId(body) };
    }
    lastStatus = response.status;
    lastFailure = `GitHub returned ${response.status}: ${body.slice(0, 300)}`;
    if (!isRetryable(response.status)) {
      throw new DispatchError(lastFailure, lastStatus, attempt);
    }
    if (attempt < maxAttempts) await sleep(retryDelay * attempt);
  }
  throw new DispatchError(lastFailure, lastStatus, maxAttempts);
}
