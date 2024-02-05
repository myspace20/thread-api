import { SchemaBuilder, type Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('posts',function(table){
        table.string('post_title').nullable()
    })
}


export async function down(knex: Knex): Promise<void> {
}

