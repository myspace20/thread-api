import { Model } from "objection";
import config from "../../knexfile";

Model.knex(config)


export class Votes extends Model{
    static get tableName(){
        return 'votes'
    }
}