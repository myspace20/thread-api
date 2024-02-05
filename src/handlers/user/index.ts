import { Request, Response } from "express";
import { UserService } from "../../services/UserService";
import { userPostSchema } from "./schema";

export async function userPost(req: Request, res: Response) {
  await userPostSchema.validateAsync(req.body, { abortEarly: false });
  const user = await UserService.signUp(req.body);
  res.send(user);
}
