import { Router } from "express";
import {  answerQuestionPatch, deletePost, postGET, questionPOST } from "../handlers/posts";
import { handlerWrapper } from "../util/util";

export const postRouter = Router();

postRouter.get("/post", handlerWrapper(postGET));

postRouter.post("/post",handlerWrapper(questionPOST));


postRouter.patch('/answer_question/:id',handlerWrapper(answerQuestionPatch))

postRouter.delete('/post/:id',handlerWrapper(deletePost))

