import { Model } from "objection";
import BaseModel from "./Base";
import { User } from "./User";

export class Comment extends BaseModel {
  static get tableName() {
    return "comments";
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
