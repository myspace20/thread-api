import { Tag } from "../models/tag/Tag";
import { HttpError } from "../util/HttpError";

export class TagService {
  async getById(id) {
    const tag = await Tag.query().findOne(id);
    if (!tag) throw new HttpError(404, `tag with id ${id} not found`);
    return tag;
  }

  async get(){
    const tags = await Tag.query()
    return tags
  }

  async create(tagData) {
    const tag = await Tag.query().insert(tagData);
    return tag;
  }

  async patch(id, tagData) {
    await this.getById(id);
    const tag = await Tag.query().patch(tagData).where(id);
    return tag;
  }

  async delete(id) {
    await this.getById(id);
    const tag = await Tag.query().deleteById(id);
    return tag;
  }
}
