import { Router } from "express";
import { sessionPatch, sessionPost } from "../handlers/session";

export const sessionRouter = Router()

sessionRouter.post('/session_create',sessionPost)
sessionRouter.patch('/session_logout',sessionPatch)