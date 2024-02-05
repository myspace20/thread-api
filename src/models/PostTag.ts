import BaseModel from "./Base";

export class PostTag extends BaseModel {
  static get tableName() {
    return "post_tags";
  }
}
