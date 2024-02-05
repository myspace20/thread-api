import { Request, Response } from "express";
import { VoteTypeService } from "../../services/VoteType";
import {
  voteTypeParamsSchema,
  voteTypePatchSchema,
  voteTypePostSchema,
} from "./schema";

export async function voteTypePost(req: Request, res: Response) {
  await voteTypePostSchema.validateAsync(req.body, { abortEarly: false });
  const voteTypeService = new VoteTypeService();
  const voteType = await voteTypeService.create(req.body);
  res.send(voteType);
}

export async function voteTypeGet(req: Request, res: Response) {
  const voteTypeService = new VoteTypeService();
  const voteType = await voteTypeService.get();
  res.send(voteType);
}

export async function voteTypePatch(req: Request, res: Response) {
  await voteTypeParamsSchema.validateAsync(req.params, { abortEarly: false });
  await voteTypePatchSchema.validateAsync(req.body, { abortEarly: false });
  const voteTypeService = new VoteTypeService();
  const voteType = await voteTypeService.patch(req.params.id, req.body);
  res.send(voteType);
}

export async function voteTypeDelete(req: Request, res: Response) {
  await voteTypeParamsSchema.validateAsync(req.params, { abortEarly: false });
  const voteTypeService = new VoteTypeService();
  await voteTypeService.delete(req.params.id);
  res.status(204).send("vote type deleted successfully");
}
