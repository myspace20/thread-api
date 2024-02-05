import { Registry, Histogram, collectDefaultMetrics } from "prom-client";
import express, { Application, Response, Request } from "express";

export const metricsApp: Application = express();

const register = new Registry();
register.setDefaultLabels({
  app: "thread-app",
});

export const requestHistogram = new Histogram({
  name: "test_histogram",
  help: "duration_requests",
  labelNames: ["method", "route", "code"]
});


register.registerMetric(requestHistogram)


collectDefaultMetrics({register})

metricsApp.get("/metrics", async (req: Request, res: Response) => {
  res.setHeader("Content-Type", register.contentType);
  const metrics = await register.metrics()
  res.send(metrics)
});