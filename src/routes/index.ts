// import { answerRouter } from "./answers";
// import { commentRouter } from "./comments";
import { postTypeRouter } from "./postTypes";
import { postRouter } from "./posts";
import { sessionRouter } from "./session";
import { tagsRouter } from "./tags";
import { userRouter } from "./user";
import { voteTypeRouter } from "./voteTypes";
import { voteRouter } from "./votes";

export default [
  // answerRouter,
  postRouter,
  postTypeRouter,
  tagsRouter,
  userRouter,
  sessionRouter,
  // commentRouter,
  voteRouter,
  voteTypeRouter,
];
