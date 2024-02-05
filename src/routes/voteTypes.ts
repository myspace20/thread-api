import { Router } from "express";
import {
  voteTypeDelete,
  voteTypeGet,
  voteTypePatch,
  voteTypePost,
} from "../handlers/voteTypes";

export const voteTypeRouter = Router();

voteTypeRouter.post("/vote_type", voteTypePost);
voteTypeRouter.get("/vote_type", voteTypeGet);
voteTypeRouter.patch("/vote_type/:id", voteTypePatch);
voteTypeRouter.delete("/vote_type/:id", voteTypeDelete);
