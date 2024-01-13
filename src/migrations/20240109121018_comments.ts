import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('comments', function(table){
        table.uuid('id', {primaryKey:true}).defaultTo(knex.raw('uuid_generate_v4()'))
        table.string('comment_text').notNullable()
        table.uuid('created_by_user_id').references('id').inTable('users').notNullable()
        table.uuid('post_id').references('id').inTable('posts').notNullable()
        table.dateTime('created_at').defaultTo(knex.fn.now()).notNullable()
        table.dateTime('updated_at').defaultTo(knex.fn.now()).notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('comments')
}
