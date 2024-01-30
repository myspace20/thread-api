import { Router } from "express";
import { sessionPatch, sessionPost } from "../handlers/session";
import { handlerWrapper } from "../util/util";

export const sessionRouter = Router();

sessionRouter.post("/session_create", handlerWrapper(sessionPost));
sessionRouter.patch("/session_logout", handlerWrapper(sessionPatch));
