import { Model, RelationMappings, RelationMappingsThunk } from "objection";
import BaseModel from "./Base";
import { PostType } from "./PostType";
import { Tag } from "./Tag";
import { User } from "./User";
import { Votes } from "./Vote";



export class Answer extends BaseModel {
    static get tableName() {
      return "answers";
    }
    static relationMappings = {
        votes: {
            relation: Model.HasManyRelation,
            modelClass: Votes,
            join: {
              from: "votes.post_id",
              to: "answers.id",
            },
          },
          author: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
              from: "answers.created_by_user_id",
              to: "users.id",
            },
          },
          post_type: {
            relation: Model.BelongsToOneRelation,
            modelClass: PostType,
            join: {
              from: "post_types.id",
              to: "answers.post_type_id",
            },
          },
    }
}