import { Model } from "objection";
import config from "../../knexfile";
import knex from 'knex'

const db = knex(config)


export default function initializeDb(){
    return Model.knex(db)
}