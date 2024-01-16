import BaseModel from "../base/Base";
import schema from "../post_tag/post_tag.schema.json";

export class PostTag extends BaseModel {
  static get tableName() {
    return "post_tags";
  }

  static get jsonSchema() {
    return schema;
  }
}
