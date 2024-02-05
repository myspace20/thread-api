import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('votes',(table)=>{
        table.dropColumn('post_id')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('votes')
}

