import { AnswerService } from "../../services/AnswerService";
import { Request, Response } from "express";
import {
  answerParamSchema,
  answerPatchSchema,
  answerPostSchema,
} from "./schema";

export async function answerPost(req: Request, res: Response) {
  await answerPostSchema.validateAsync(req.body, { abortEarly: false });
  const answerService = new AnswerService();
  const answer = await answerService.create(req.body);
  res.send(answer);
}

export async function answerPatch(req: Request, res: Response) {
  await answerParamSchema.validateAsync(req.params, { abortEarly: false });
  await answerPatchSchema.validateAsync(req.body, { abortEarly: false });
  const answerService = new AnswerService();
  const answer = await answerService.patch(req.params.id, req.body);
  res.send(answer);
}

export async function AnswerDelete(req: Request, res: Response) {
  await answerParamSchema.validateAsync(req.params, { abortEarly: false });
  const answerService = new AnswerService();
  await answerService.delete(req.params.id);
  res.status(204).send("answer deleted successfully");
}
