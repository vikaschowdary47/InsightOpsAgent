import si from "systeminformation";

export async function collectSystemMetrics() {
  const cpu = await si.currentLoad();
  const mem = await si.mem();

  return {
    timestamp: Date.now(),
    cpu: cpu.currentLoad,
    memory: mem.used / mem.total,
    freeMem: mem.free,
    totalMem: mem.total,
  };
}
