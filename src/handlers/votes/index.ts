import { Request, Response } from "express";
import { VoteService } from "../../services/VoteService";
import { voteParamSchema, votePatchSchema, votePostSchema } from "./schema";

export async function votePost(req: Request, res: Response) {
  await votePostSchema.validateAsync(req.body, { abortEarly: false });
  const voteService = new VoteService();
  const vote = await voteService.create(req.body);
  res.send(vote);
}

export async function votePatch(req: Request, res: Response) {
  await voteParamSchema.validateAsync(req.params, { abortEarly: false });
  await votePatchSchema.validateAsync(req.body, { abortEarly: false });
  const voteService = new VoteService();
  await voteService.patch(req.params.id, req.body);
  res.send("vote updated sucessfully");
}
