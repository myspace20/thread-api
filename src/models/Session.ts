import { Model } from "objection";
import config from "../../knexfile";

Model.knex(config)


export class Session extends Model{
    static get tableName(){
        return 'sessions'
    }
}