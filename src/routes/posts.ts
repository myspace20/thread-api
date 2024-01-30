import { Router } from "express";
import { postGET, questionPOST } from "../handlers/posts";

export const postRouter = Router()


postRouter.get('/post',postGET)

postRouter.post('/post', questionPOST)

