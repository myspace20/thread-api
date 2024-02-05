import BaseModel from "./Base";
import { compareSync, hashSync } from "bcrypt";
import { Model, RelationMappings, RelationMappingsThunk } from "objection";
import { Session } from "./Session";

export class User extends BaseModel {
  updated_at: string;
  id: string;
  // static password_hash: string;
  static get tableName() {
    return "users";
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
