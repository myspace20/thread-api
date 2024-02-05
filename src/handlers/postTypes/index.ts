import { Request, Response } from "express";
import { PostTypeService } from "../../services/PostTypeService";
import { postTypeParamSchema, postTypePostSchema } from "./schema";

export async function postTypePost(req: Request, res: Response) {
  await postTypePostSchema.validateAsync(req.body, { abortEarly: false });
  const postTypeService = new PostTypeService();
  const postType = await postTypeService.create(req.body);
  res.send(postType);
}

export async function postTypeGet(req: Request, res: Response) {
  const postTypeService = new PostTypeService();
  const postTypes = await postTypeService.get();
  res.send(postTypes);
}

export async function postTypePatch(req: Request, res: Response) {
  await postTypeParamSchema.validateAsync(req.params, { abortEarly: false });
  await postTypePostSchema.validateAsync(req.body, { abortEarly: false });
  const postTypeService = new PostTypeService();
  const postType = await postTypeService.patch(req.params.id, req.body);
  res.send(postType);
}

export async function postTypeDelete(req: Request, res: Response) {
  await postTypeParamSchema.validateAsync(req.params, { abortEarly: false });
  const postTypeService = new PostTypeService();
  const postType = await postTypeService.delete(req.params.id);
  res.send(postType);
}
