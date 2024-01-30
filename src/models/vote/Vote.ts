import { Model } from "objection";
import BaseModel from "../base/Base";
import schema from "../vote/vote.schema.json";
import { User } from "../user/User";
import { VoteType } from "../vote_type/VoteType";

export class Votes extends BaseModel {
  static get tableName() {
    return "votes";
  }
  static relationMappings = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: "users.id",
        to: "votes.user_id",
      },
    },
    vote_type: {
      relation: Model.BelongsToOneRelation,
      modelClass: VoteType,
      join: {
        from: "vote_types.id",
        to: "votes.vote_type_id",
      },
    },
  };
  static get jsonSchema() {
    return schema;
  }
}
