import express, {
  Application,
  json,
  urlencoded,
  Request,
  Response,
} from "express";
import { errorHandler, handlerWrapper } from "./util/util";
import CookieParser from "cookie-parser";
import { deserializeUser } from "./middleware/deserializeUser";
import routes from "./routes";
import { requestHistogram } from "./metrics/metrics";
import responseTime from "response-time";

export const app: Application = express();

app.use(json());

app.use(urlencoded({ extended: false }));

app.use(CookieParser());

app.use(deserializeUser);

app.use(routes);

app.use(
  responseTime((req: Request, res: Response, time: number) => {
    console.log(time);
    requestHistogram
      .labels(req.method, req.route.path, res.statusCode.toString())
      .observe(time/1000);
  })
);

app.use(errorHandler);

app.get("*", async function (req: Request, res: Response) {
  res.send("version 1.0.0");
});
