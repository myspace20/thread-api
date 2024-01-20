import BaseModel from "../base/Base";
import { compareSync, hashSync } from "bcrypt";
import schema from "../user/user.schema.json";
import { Model, RelationMappings, RelationMappingsThunk } from "objection";
import { Session } from "../session/Session";

export class User extends BaseModel {
  updated_at: string;
  id: string;
  // static password_hash: string;
  static get tableName() {
    return "users";
  }

  static get jsonSchema() {
    return schema;
  }

  static async encryptPassword(password: string) {
    return hashSync(password, 10);
  }

  // comparePassword(plaintext: string) {
  //   return compareSync(plaintext, User.password_hash);
  // }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}
