import { Model } from "objection";
import config from "../../knexfile";

Model.knex(config)

export class Posts extends Model{
    static get tableName(){
        return 'posts'
    }
}