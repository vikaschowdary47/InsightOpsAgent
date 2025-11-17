import axios from "axios";

export async function batchAndSend(metrics, apiKey, endpoint) {
  try {
    await axios.post(endpoint, {
      apiKey,
      metrics,
    });
  } catch (err) {
    console.error("InsightOps: Failed to send metrics", err.message);
  }
}
