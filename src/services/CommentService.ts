import { Comment } from "../models/Comment";

export class CommentService {
  async getById(id: string) {
    const comment = await Comment.query().findById(id);
    if (!comment) throw Error(`comment with id ${id} not found`);
    return comment;
  }
  async create(commentData) {
    const comment = await Comment.query().insert(commentData);
    return comment;
  }

  /*a total update of comment is clearly not needed at this moment ,
  might become necessary in the future.
  */
 
  // async update(id: string, commentData) {
  //   await this.getById(id);
  //   const comment = await Comment.query().update(commentData).where(id);
  //   return comment;
  // }

  async patch(id: string, commentData) {
    await this.getById(id);
    const comment = await Comment.query().patch(commentData).where(id);
    return comment;
  }

  async delete(id) {
    await this.getById(id);
    const comment = await Comment.query().deleteById(id);
    return comment;
  }
}
