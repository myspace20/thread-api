import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('users',(table)=>{
        table.uuid('id', {primaryKey:true}).defaultTo(knex.raw("uuid_generate_v4()"))
        table.string('email').unique().notNullable()
        table.string('display_name', 50).notNullable()
        table.string('password_hash').notNullable()
        table.string('about_me').notNullable()
        table.string('location').notNullable()
        table.dateTime('created_at').defaultTo(knex.fn.now()).notNullable()
        table.dateTime('updated_at').defaultTo(knex.fn.now()).notNullable()    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('users')
}

