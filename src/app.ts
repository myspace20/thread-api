import express, {
  Application,
  json,
  urlencoded,
  Request,
  Response,
} from "express";
import { sessionRouter } from "./routes/session";
import { errorHandler, handlerWrapper } from "./util/util";
import { UserService } from "./services/UserService";
import { User } from "./models/user/User";

export const app: Application = express();

app.use(json());

app.use(urlencoded({ extended: false }));

// app.get('/test', async function(req: Request, res: Response){
//     const sessions = await Session
//     .query().withGraphFetched('user')
//     res.send(sessions)
// })

// app.post('/login', async function (req: Request, res: Response) {
//   const session = await SessionService.login(req.body)
//   res.send(session)
// })

app.post('/sign_up',handlerWrapper(async(req: Request, res: Response)=>{
  const user = await UserService.signUp(req.body)
  res.send(user)
}))

app.use(sessionRouter);

app.use(errorHandler);

app.get("*", async function (req: Request, res: Response) {
  res.send("version 1.0.0");
});
