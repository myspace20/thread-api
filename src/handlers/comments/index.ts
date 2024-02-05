import { Request, Response } from "express";
import { CommentService } from "../../services/CommentService";
import {
  commentParamSchema,
  commentPatchSchema,
  commentPostSchema,
} from "./schema";

export async function commentPost(req: Request, res: Response) {
  await commentPostSchema.validateAsync(req.body, { abortEarly: false });
  const commentService = new CommentService();
  const comment = await commentService.create(req.body);
  res.send(comment);
}

export async function commentPatch(req: Request, res: Response) {
  await commentParamSchema.validateAsync(req.params, { abortEarly: false });
  await commentPatchSchema.validateAsync(req.body, { abortEarly: false });
  const commentService = new CommentService();
  const comment = await commentService.patch(req.params.id, req.body);
  res.send(comment);
}

export async function commentDelete(req: Request, res: Response) {
  await commentParamSchema.validateAsync(req.params, { abortEarly: false });
  const commentService = new CommentService();
  await commentService.delete(req.params.id);
  res.status(204).send("comment deleted successfully");
}
