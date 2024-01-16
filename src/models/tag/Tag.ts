import BaseModel from "../base/Base";
import schema from "../tag/tag.schema.json";

export class Tag extends BaseModel {
  static get tableName() {
    return "tags";
  }

  static get jsonSchema() {
    return schema;
  }
}
