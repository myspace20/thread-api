import { Router } from "express";
import { tagDelete, tagGet, tagPatch, tagPost } from "../handlers/tags";

export const tagsRouter = Router();

tagsRouter.post("/tag", tagPost);
tagsRouter.get("/tag", tagGet);
tagsRouter.patch("/tag/:id", tagPatch);
tagsRouter.delete("/tag/:id", tagDelete);
