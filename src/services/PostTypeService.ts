import { PostType } from "../models/PostType";
import { HttpError } from "../util/HttpError";

export class PostTypeService {
  async getById(id) {
    const postType = await PostType.query().findById(id);
    if (!postType)
      throw new HttpError(404, `post type with id ${id} not found`);
    return postType;
  }

  async create(postTypeData) {
    const postType = await PostType.query().insert(postTypeData);
    return postType;
  }

  async get() {
    const postTypes = await PostType.query();
    return postTypes;
  }

  async patch(id, postTypeData) {
    await this.getById(id);
    const postType = await PostType.query().patch(postTypeData).where(id);
    return postType;
  }

  async delete(id) {
    await this.getById(id);
    const postType = await PostType.query().deleteById(id);
    return postType;
  }
}
