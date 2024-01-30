import { Posts } from "../models/post/Post";
import { HttpError } from "../util/HttpError";

export class PostService {
  async getById(id) {
    const post = await Posts.query().insert(id);
    if (post) throw new HttpError(404, `post with id ${id} not found`);
    return post;
  }

  async get() {
    //need to paginate with limits and offsets
    const posts = await Posts.query()
      .returning("*")
      .withGraphFetched("[author, comments]");
    return posts;
  }

  async patch(id, postData) {
    await this.getById(id);
    const post = await Posts.query().patch(postData).where(id);
    return post;
  }

  async createChildPostAsAnswer(childPostData) {
    const trx = await Posts.startTransaction();
    try {
      const parentPost = await Posts.query(trx).findById(
        childPostData.parent_question_id
      );
      if (!parentPost) {
        throw new HttpError(404, "post not found");
      }
      const childPost = await Posts.query(trx).insert(childPostData);
      trx.commit();
      return childPost;
    } catch (error) {
      trx.rollback();
      throw new HttpError(400, "error creating post");
    }
  }

  async setPostAsAcceptedAnswer(parentPostId, childPostId) {
    const childPost = await this.getById(childPostId);
    //@ts-ignore
    if (childPost.parent_question_id != parentPostId)
      throw new HttpError(400, "error setting post an accepted answer");
    const acceptedAnswer = await Posts.query()
      .patch({ accepted_answer_id: childPostId })
      .where(parentPostId);
    return acceptedAnswer;
  }

  async delete(id) {
    await this.getById(id);
    const post = await Posts.query().deleteById(id);
    return post;
  }
}
