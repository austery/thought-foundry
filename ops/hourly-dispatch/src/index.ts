import { DispatchError, dispatchWorkflow, readConfig } from './dispatch.js';

/** The subset of the Workers runtime ScheduledController used here. */
interface ScheduledController {
  readonly scheduledTime: number;
  readonly cron: string;
}

/**
 * Independent hourly clock for the deployment workflow. GitHub `schedule`
 * events for this repository have been delayed or dropped since 2026-08-26
 * (docs/research/2026-11-03-schedule-differential-evidence.md), while
 * workflow_dispatch runs start within seconds.
 */
export default {
  async scheduled(controller: ScheduledController, env: Record<string, unknown>): Promise<void> {
    const planned = new Date(controller.scheduledTime).toISOString();
    try {
      const config = readConfig(env);
      const result = await dispatchWorkflow(config, { fetch: (url, init) => fetch(url, init) });
      console.log(JSON.stringify({ event: 'dispatched', planned, cron: controller.cron, ...result }));
    } catch (error) {
      const detail =
        error instanceof DispatchError
          ? { status: error.status, attempts: error.attempts, message: error.message }
          : { message: error instanceof Error ? error.message : String(error) };
      console.error(JSON.stringify({ event: 'dispatch_failed', planned, cron: controller.cron, ...detail }));
      // Rethrow so the Cloudflare cron event is recorded as failed.
      throw error;
    }
  },
};
