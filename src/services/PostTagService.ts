import { Posts } from "../models/Post";
import { Tag } from "../models/Tag";
import { HttpError } from "../util/HttpError";

export class PostTagService {
  async createPostAsQuestionWithTags(postDetails, postTags: [string]) {
    const trx = await Posts.startTransaction();
    try {
      console.log(postDetails, postTags)
      const tagIds = await Tag.query(trx).findByIds(postTags)
      const post = await trx("posts").insert(postDetails).returning('id');
      //@ts-ignore
      const postId = post[0].id;
      const mappedPostAndTagIds = postTags.map((tagId) => {
        return { post_id: postId, tag_id: tagId };
      });
      console.log(mappedPostAndTagIds)
      const postWithTags = await trx("post_tags").insert(mappedPostAndTagIds);
      console.log(postWithTags)
      trx.commit();
      return "post created successfully";
    } catch (error:any) {
      trx.rollback();
      throw new HttpError(400, 'an error occured while creating post')
    }
  }
}
