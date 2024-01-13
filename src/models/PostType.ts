import { Model } from "objection";
import config from "../../knexfile";

Model.knex(config)

export class PostType extends Model{
    static get tableName(){
        return 'post_types'
    }
}