import { Request, Response } from "express";
import { PostService } from "../../services/PostService";
import { PostTagService } from "../../services/PostTagService";
import {
  postParamSchema,
  postPatchSchema,
  postPostSchema,
  questionAnswerPatchSchema,
} from "./schema";

export async function questionPOST(req: Request, res: Response) {
  await postPostSchema.validateAsync(req.body, { abortEarly: false });
  const postTagService = new PostTagService();
  const post = await postTagService.createPostAsQuestionWithTags(
    req.body.postDetails,
    req.body.postTags
  );
  res.send(post);
}

export async function postGET(req: Request, res: Response) {
  const postService = new PostService();
  const posts = await postService.get();
  res.send(posts);
}

export async function questionPATCH(req: Request, res: Response) {
  await postParamSchema.validateAsync(req.params, { abortEarly: false });
  await postPatchSchema.validateAsync(req.body, { abortEarly: false });
  const postService = new PostService();
  const post = await postService.patch(req.params.id, req.body);
  res.send(post);
}

export async function answerQuestionPatch(req: Request, res: Response) {
  await questionAnswerPatchSchema.validateAsync(req.params, {
    abortEarly: false,
  });
  const postService = new PostService();
  const acceptedAnswer = await postService.setPostAsAcceptedAnswer(
    req.params.answerId,
    req.params.postId
  );
  res.send(acceptedAnswer);
}

export async function deletePost(req: Request, res: Response) {
  await postParamSchema.validateAsync(req.params, { abortEarly: false });
  const postService = new PostService();
  await postService.delete(req.params.id);
  res.status(204).send("post deleted successfully");
}
