import BaseModel from "./Base";

export class Tag extends BaseModel {
  static get tableName() {
    return "tags";
  }

}
