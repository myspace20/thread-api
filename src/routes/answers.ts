import { Router } from "express";
import { AnswerDelete, answerPatch, answerPost } from "../handlers/answers";

export const answerRouter = Router()

answerRouter.post('/answer', answerPost)

answerRouter.patch('/answer/:id', answerPatch)

answerRouter.delete('/answer/:id', AnswerDelete)