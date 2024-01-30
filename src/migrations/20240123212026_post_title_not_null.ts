import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('posts', function(table){
        table.dropColumn('post_title')
    })
}


export async function down(knex: Knex): Promise<void> {
}

