import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('posts', (table)=>{
        table.dropColumn('parent_question_id')
        table.dropColumn('post_title')
    })
}


export async function down(knex: Knex): Promise<void> {
   await knex.schema.dropTable('posts')
}

