import { Comment } from "../models/comment/Comment";

export class CommentService {
  async getById(id: string) {
    const comment = await Comment.query().findOne(id);
    if (!comment) throw Error(`comment with ${id} not found`);
    return comment;
  }
  async create(commentData) {
    const comment = await Comment.query().insert(commentData);
    return comment;
  }

  async update(id: string, commentData) {
    await this.getById(id);
    const comment = await Comment.query().update(commentData).where(id);
    return comment;
  }

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
