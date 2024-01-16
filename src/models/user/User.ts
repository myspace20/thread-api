import BaseModel from "../base/Base";
import {compareSync, hashSync} from 'bcrypt'
import schema from '../user/user.schema.json'

export class User extends BaseModel {
  updated_at: string;
  static password_hash: string;
  static get tableName() {
    return "users";
  }

  static get jsonSchema(){
    return schema
  }
  

  static encryptPassword(password: string) {
    return hashSync(password,10)
  }

  static comparePassword(plaintext:string){
    return compareSync(plaintext,this.password_hash)
  }
  
  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }

}
