import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('answers',(table)=>{
    table.uuid('id', {primaryKey:true}).defaultTo(knex.raw('uuid_generate_v4()'))
    table.string('answer_details').notNullable()
    table.uuid('created_by_user_id').references('id').inTable('users').notNullable()
    table.uuid('parent_question_id').references('id').inTable('posts').nullable()
    table.uuid('post_type_id').references('id').inTable('post_types').notNullable()
    table.dateTime('created_at').defaultTo(knex.fn.now()).notNullable()
    table.dateTime('updated_at').defaultTo(knex.fn.now()).notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('answers')
}

