import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('votes', function(table){
        table.uuid('id', {primaryKey:true}).defaultTo(knex.raw('uuid_generate_v4()'))
        table.uuid('post_id').references('id').inTable('posts')
        table.uuid('vote_type_id').references('id').inTable('vote_types')
        table.uuid('user_id').references('id').inTable('users')
        table.dateTime('created_at').defaultTo(knex.fn.now()).notNullable()
        table.dateTime('updated_at').defaultTo(knex.fn.now()).notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('votes')
}