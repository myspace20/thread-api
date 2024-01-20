import { Model } from "objection";
import config from "../../knexfile";


export default function initializeDb(){
    return Model.knex(config)
}