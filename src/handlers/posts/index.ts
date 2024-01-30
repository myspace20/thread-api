import { Request, Response } from "express";
import { PostService } from "../../services/PostService";
import { PostTagService } from "../../services/PostTagService";

export async function questionPOST(req: Request, res: Response) {
  const postTagService = new PostTagService();
  const post = await postTagService.createPostAsQuestionWithTags(
    req.body.postDetails,
    req.body.postTags
  );
  return post;
}

export async function postGET(req: Request, res: Response) {
  const postService = new PostService();
  const posts = await postService.get();
  res.send(posts);
}

export async function questionPATCH(req: Request, res: Response) {
  const postService = new PostService();
  const post = await postService.patch(req.params.id, req.body);
  res.send(post);
}

export async function answerPost(req: Request, res: Response) {
  const postService = new PostService();
  const answer = await postService.createChildPostAsAnswer(req.body);
  res.send(answer);
}

export async function answerQuestionPatch(req: Request, res: Response) {
  const postService = new PostService();
  const acceptedAnswer = await postService.setPostAsAcceptedAnswer(
    req.params.pid,
    req.params.postid
  );
  res.send(acceptedAnswer);
}

export async function answerPatch(req: Request, res: Response) {
  const postService = new PostService();
  const answer = await postService.patch(req.params.id, req.body);
  res.send(answer);
}
export async function deletePost(req: Request, res: Response) {
  const postService = new PostService();
  await postService.delete(req.params.id);
  res.status(204).send("post deleted successfully");
}
