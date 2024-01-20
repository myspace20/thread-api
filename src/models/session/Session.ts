import { Model } from "objection";
import BaseModel from "../base/Base";
import schema from "../session/session.schema.json";
import { User } from "../user/User";

export class Session extends BaseModel {
  user_id:string;
  updated_at: string;
  static is_valid: boolean;
  static get tableName() {
    return "sessions";
  }

  is_valid:Boolean
  id:string


  static relationMappings={
    user:{
      relation:Model.BelongsToOneRelation,
      modelClass:User,
      join:{
        from:'sessions.user_id',
        to:'users.id'
      }
    }
  }

  static async invalidateSession(id:string){
    return this.is_valid = false
  }

  static get jsonSchema() {
    return schema;
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}
