import { Answer } from "../models/Answer";
import { Posts } from "../models/Post";
import { HttpError } from "../util/HttpError";


export class AnswerService {
    async getById(id) {
        const answer = await (await Answer.query()).findIndex(id);
        if (!answer) throw new HttpError(404, `post with id ${id} not found`);
        return answer;
      }

    async create(childPostData) {
        const trx = await Posts.startTransaction();
        try {
          const parentPost = await Posts.query(trx).findById(
            childPostData.parent_question_id
          );
          if (!parentPost) {
            throw new HttpError(404, "post not found");
          }
          const answer = await Answer.query(trx).insert(childPostData);
          trx.commit();
          return answer;
        } catch (error) {
          trx.rollback();
          throw new HttpError(400, "error creating post");
        }
      }

      async patch(id, postData) {
        await this.getById(id);
        const answer = await Posts.query().patch(postData).where(id);
        return answer;
      }

      async delete(id) {
        await this.getById(id);
        const answer = await Answer.query().deleteById(id);
        return answer;
      }
    
}