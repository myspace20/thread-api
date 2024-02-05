import { Model } from "objection";
import BaseModel from "./Base";
import { User } from "./User";
import { VoteType } from "./VoteType";

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

  static get modifiers(){
    return {
      voteCount(builder){
        builder.select('vote_type').count("* as vote count")
        .groupBy('vote_type')
      }
    }
  }
}
