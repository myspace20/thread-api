import { Model } from "objection";
import config from "../../knexfile";

Model.knex(config)


export class User extends Model{
    static get tableName(){
        return 'users'
    }
}