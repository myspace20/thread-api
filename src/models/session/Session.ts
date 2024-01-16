import BaseModel from "../base/Base";
import schema from "../session/session.schema.json";

export class Session extends BaseModel {
  static get tableName() {
    return "sessions";
  }

  static get jsonSchema() {
    return schema;
  }
}
