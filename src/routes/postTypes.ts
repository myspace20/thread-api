import { Router } from "express";
import { postTypePost } from "../handlers/postTypes";

export const postTypeRouter = Router()

postTypeRouter.post('/post_type', postTypePost)