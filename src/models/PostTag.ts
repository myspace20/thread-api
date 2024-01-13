import { Model } from "objection";
import config from "../../knexfile";

Model.knex(config)

export class PostTag extends Model{
    static get tableName(){
        return 'post_tags'
    }
}