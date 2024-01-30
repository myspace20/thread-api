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
import CookieParser from 'cookie-parser'
import { SessionService } from "./services/SessionService";
import { deserializeUser } from "./middleware/deserializeUser";
import { Model } from "objection";
import { postRouter } from "./routes/posts";
import { tagsRouter } from "./routes/tags";
import { postTypeRouter } from "./routes/postTypes";


export const app: Application = express();

app.use(json());

app.use(urlencoded({ extended: false }));

app.use(CookieParser())

app.use(deserializeUser)

// app.get('/test', async function(req: Request, res: Response){
//     const sessions = await Session
//     .query().withGraphFetched('user')
//     res.send(sessions)
// })

// app.post('/login', async function (req: Request, res: Response) {
//   const session = await SessionService.login(req.body)
//   res.send(session)
// })

// app.post('/sign_up',handlerWrapper(async(req: Request, res: Response)=>{
//   const user = await UserService.signUp(req.body)
//   res.send(user)
// }))

app.use(sessionRouter);

app.use(postRouter)

app.use(tagsRouter)

app.use(postTypeRouter)



app.use(errorHandler);

app.get("*", async function (req: Request, res: Response) {
  res.send("version 1.0.0");
});
