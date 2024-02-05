import { RelationMappings, RelationMappingsThunk } from "objection";
import BaseModel from "./Base";

export class PostType extends BaseModel {
  static get tableName() {
    return "post_types";
  }

}
