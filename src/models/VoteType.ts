import { Model } from "objection";
import config from "../../knexfile";

Model.knex(config)


export class VoteType extends Model{
    static get tableName(){
        return 'vote_types'
    }
}