import { Router } from "express";
import {
  postTypeGet,
  postTypePatch,
  postTypePost,
} from "../handlers/postTypes";

export const postTypeRouter = Router();

postTypeRouter.post("/post_type", postTypePost);
postTypeRouter.get("/post_type", postTypeGet);
postTypeRouter.patch("/post_type/:id", postTypePatch);
postTypeRouter.delete("/post_type/:id", postTypePatch);
