import { Router } from "express";
import { userPost } from "../handlers/user";
import { handlerWrapper } from "../util/util";

export const userRouter = Router();

userRouter.post("/sign_up",handlerWrapper(userPost));
