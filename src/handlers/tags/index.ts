import { Request, Response } from "express";
import { TagService } from "../../services/TagService";
import { tagParamSchema, tagPatchSchema, tagPostSchema } from "./schema";

export async function tagPost(req: Request, res: Response) {
  await tagPostSchema.validateAsync(req.body, { abortEarly: false });
  const tagService = new TagService();
  const tag = await tagService.create(req.body);
  res.send(tag);
}

export async function tagGet(req: Request, res: Response) {
  const tagService = new TagService();
  const tags = await tagService.get();
  res.send(tags);
}

export async function tagPatch(req: Request, res: Response) {
  await tagParamSchema.validateAsync(req.params, { abortEarly: false });
  await tagPatchSchema.validateAsync(req.body, { abortEarly: false });
  const tagService = new TagService();
  const tag = await tagService.patch(req.params.id, req.body);
  res.send(tag);
}

export async function tagDelete(req: Request, res: Response) {
  await tagParamSchema.validateAsync(req.params, { abortEarly: false });
  const tagService = new TagService();
  const tag = await tagService.delete(req.params.id);
  res.send(tag);
}
