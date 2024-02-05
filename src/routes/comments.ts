import { Router } from "express";
import { commentDelete, commentPatch, commentPost } from "../handlers/comments";

export const commentRouter = Router();

commentRouter.post("/comment", commentPost);
commentRouter.patch("/comment/:id", commentPatch);
commentRouter.delete("/comment/:id", commentDelete);
