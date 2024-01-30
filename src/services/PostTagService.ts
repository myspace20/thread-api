import { Posts } from "../models/post/Post";

export class PostTagService {
  async createPostAsQuestionWithTags(postDetails, postTags: [string]) {
    const trx = await Posts.startTransaction();
    try {
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
      return postWithTags;
    } catch (error) {
      trx.rollback();
    }
  }
}
