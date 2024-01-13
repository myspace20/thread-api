import type { Knex } from "knex";

//compound ids to be used
export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('post_tags',function(table){
        table.uuid('post_id').references('id').inTable('posts').notNullable()
        table.uuid('tag_id').references('id').inTable('tags').notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('post_tags')
}
