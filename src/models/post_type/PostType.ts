import { RelationMappings, RelationMappingsThunk } from "objection";
import BaseModel from "../base/Base";
import schema from "../post_type/post_type.schema.json";

export class PostType extends BaseModel {
  static get tableName() {
    return "post_types";
  }

  static get jsonSchema() {
    return schema;
  }
}
