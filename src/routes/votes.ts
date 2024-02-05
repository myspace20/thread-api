import { Router } from "express";
import { votePatch, votePost } from "../handlers/votes";


export const voteRouter = Router()

voteRouter.post('/vote',votePost)
voteRouter.patch('/vote/:id',votePatch)
