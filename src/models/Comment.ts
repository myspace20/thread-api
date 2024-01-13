import { Model } from "objection";
import config from "../../knexfile";

Model.knex(config)


export class Comment extends Model{
    static get tableName(){
        return 'comments'
    }
}