import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('votes',(table)=>{
        table.uuid('post_id').references('id').inTable('answers')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('answers')
}

