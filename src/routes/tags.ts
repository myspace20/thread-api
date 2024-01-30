import { Router } from "express";
import { tagPost } from "../handlers/tags";


export const tagsRouter = Router()

tagsRouter.post('/tag', tagPost)