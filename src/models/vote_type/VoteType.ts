import BaseModel from "../base/Base";
import schema from "../vote_type/vote_type.schema.json";

export class VoteType extends BaseModel {
  static get tableName() {
    return "vote_types";
  }

  static get jsonSchema() {
    return schema;
  }
}
