import { Model } from "objection";
import BaseModel from "../base/Base";
import scheam from "../comment/comment.schema.json";
import { User } from "../user/User";

export class Comment extends BaseModel {
  static get tableName() {
    return "comments";
  }

  static get jsonSchema() {
    return scheam;
  }

  static relationMapping = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: "users.id",
        to: "comments.created_by_user_id",
      },
    },
  };
}
