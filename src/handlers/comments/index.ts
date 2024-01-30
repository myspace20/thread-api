import { Request, Response } from "express";
import { CommentService } from "../../services/CommentService";

export async function commentPost(req: Request, res: Response) {
  const commentService = new CommentService();
  const comment = await commentService.create(req.body);
  res.send(comment);
}

export async function commentPatch(req: Request, res: Response) {
  const commentService = new CommentService();
  const comment = await commentService.patch(req.params.id, req.body);
  res.send(comment);
}

export async function commentDelete(req: Request, res: Response) {
  const commentService = new CommentService();
  await commentService.delete(req.params.id);
  res.status(204).send("comment deleted successfully");
}
