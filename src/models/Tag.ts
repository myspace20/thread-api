import { Model } from "objection";
import config from "../../knexfile";

Model.knex(config)

export class Tag extends Model{
    static get tableName(){
        return 'tags'
    }
}