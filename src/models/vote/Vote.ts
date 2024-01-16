import BaseModel from "../base/Base";
import schema from "../vote/vote.schema.json";

export class Votes extends BaseModel {
  static get tableName() {
    return "votes";
  }
  static get jsonSchema() {
    return schema;
  }
}
