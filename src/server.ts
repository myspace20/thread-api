import { Application } from "express";
import { app } from "./app";
import initializeDb from "../config/database/db";
import { metricsApp } from "./metrics/metrics";


function startServer(app: Application) {
  initializeDb();
  app.listen(8080, function () {
    console.log("server is up on 8080");
  });
  metricsApp.listen(9000, () => {
    console.log("Metrics");
  });
}

startServer(app);
