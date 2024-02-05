import { Answer } from "../models/Answer";
import { Posts } from "../models/Post";
import { Votes } from "../models/Vote";
import { VoteType } from "../models/VoteType";
import { HttpError } from "../util/HttpError";
import { raw, ref } from "objection";

export class PostService {
  async getById(id) {
    const post = await Posts.query().findById(id);
    if (!post) throw new HttpError(404, `post with id ${id} not found`);
    return post;
  }

  async get() {
    //need to paginate with limits and offsets
    const posts = await Posts.query().withGraphFetched('[answers.[votes.[vote_type]]]')
    .modifyGraph('answers.votes',(builder)=>{
      builder
    })
    return posts
  }

  async patch(id, postData) {
    await this.getById(id);
    const post = await Posts.query().patch(postData).where(id);
    return post;
  }

 
  /*need to create an answer model to handle
   the duplication of post data */
  async setPostAsAcceptedAnswer(postId, answerId) {
    const childPost = await this.getById(answerId);
    //@ts-ignore
    if (childPost.parent_question_id != postId)
      throw new HttpError(400, "error setting post an accepted answer");
    const acceptedAnswer = await Posts.query()
      .patch({ accepted_answer_id: answerId })
      .where(postId);
    return acceptedAnswer;
  }

  async delete(id) {
    await this.getById(id);
    const post = await Posts.query().deleteById(id);
    return post;
  }
}
