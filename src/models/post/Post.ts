import { Model } from "objection";
import BaseModel from "../base/Base";
import { User } from "../user/User";
import { Votes } from "../vote/Vote";
import { Tag } from "../tag/Tag";
import { PostType } from "../post_type/PostType";
import { Comment } from "../comment/Comment";

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
    votes: {
      relation: Model.HasManyRelation,
      modelClass: Votes,
      join: {
        from: "votes.post_id",
        to: "posts.id",
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
      modelClass: Posts,
      join: {
        from: "posts.parent_question_id",
        to: "posts.accepted_answer_id",
      },
    },
    answers: {
      relation: Model.HasManyRelation,
      modelClass: Posts,
      join: {
        from: "posts.id",
        to: "posts.parent_question_id",
      },
    },
  };
}
