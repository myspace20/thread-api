import { Request, Response } from "express";
import { VoteService } from "../../services/VoteService";

export async function votePost(req: Request, res: Response) {
  const voteService = new VoteService();
  const vote = await voteService.create(req.body);
  res.send(vote);
}

export async function votePatch(req: Request, res: Response) {
  const voteService = new VoteService();
  await voteService.patch(req.params.id, req.body);
  res.send("vote updated sucessfully");
}
