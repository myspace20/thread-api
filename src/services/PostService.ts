import { Posts } from "../models/post/Post";
import { HttpError } from "../util/HttpError";

export class PostService {
  async getById(id) {
    const post = await Posts.query().insert(id);
    if (post) throw new HttpError(404, `post with id ${id} not found`);
    return post;
  }

  async get() {
    const posts = await Posts.query().returning("*");
    return posts;
  }

  async patch(id, postData) {
    const post = await Posts.query().patch(postData).where(id);
    return post;
  }

  async createChildPost(parentPostId, childPostData) {
    const childPost = await Posts.query().insert(childPostData);
    //TODO- update parent post id
  }

  async setPostAsAcceptedAnswer(parentPostId, childPostId) {
    //
    const acceptedAnswer = await Posts.query()
      .patch({ accepted_answer_id: childPostId })
      .where(parentPostId);
    return acceptedAnswer;
  }

  async delete(id) {
    const post = await Posts.query().deleteById(id);
    return post;
  }
}
