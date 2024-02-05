import { Model } from "objection";
import BaseModel from "./Base";
import { User } from "./User";
import { Votes } from "./Vote";
import { Tag } from "./Tag";
import { PostType } from "./PostType";
import { Comment } from "./Comment";
import { Answer } from "./Answer";

export class Posts extends BaseModel {
  static get tableName() {
    return "posts";
  }
  static relationMappings = {
    author: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: "posts.created_by_user_id",
        to: "users.id",
      },
    },
    comments: {
      relation: Model.HasManyRelation,
      modelClass: Comment,
      join: {
        from: "posts.id",
        to: "comments.post_id",
      },
    },
    tags: {
      relation: Model.ManyToManyRelation,
      modelClass: Tag,
      join: {
        from: "posts.id",
        through: {
          from: "post_tags.post_id",
          to: "post_tags.tag_id",
        },
        to: "tags.id",
      },
    },
    post_type: {
      relation: Model.BelongsToOneRelation,
      modelClass: PostType,
      join: {
        from: "post_types.id",
        to: "posts.post_type_id",
      },
    },
    accepted_answer: {
      relation: Model.BelongsToOneRelation,
      modelClass: Answer,
      join: {
        from: "answers.parent_question_id",
        to: "posts.accepted_answer_id",
      },
    },
    answers: {
      relation: Model.HasManyRelation,
      modelClass: Answer,
      join: {
        from: "posts.id",
        to: "answers.parent_question_id",
      },
    },
  };
}
