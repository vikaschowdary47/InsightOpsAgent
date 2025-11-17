import { collectSystemMetrics } from "./system.js";
import { batchAndSend } from "./sender.js";

let intervalId = null;

export const init = (apiKey, options = {}) => {
  //   init: function (apiKey, options = {}) {
  if (!apiKey) throw new Error("InsightOps API key required");

  const endpoint = options.endpoint || "https://your-domain.com/api/metrics";
  const interval = options.interval || 30_000; // 30 seconds

  intervalId = setInterval(async () => {
    const metrics = await collectSystemMetrics();
    batchAndSend(metrics, apiKey, endpoint);
  }, interval);

  console.log("InsightOps Agent started.");
};
