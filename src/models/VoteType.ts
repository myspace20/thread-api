import BaseModel from "./Base";

export class VoteType extends BaseModel {
  static get tableName() {
    return "vote_types";
  }
}
