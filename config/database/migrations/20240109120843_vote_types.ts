import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('vote_types', function(table){
        table.uuid('id', {primaryKey:true}).defaultTo(knex.raw('uuid_generate_v4()'))
        table.string('vote_type').notNullable()
        table.dateTime('created_at').defaultTo(knex.fn.now()).notNullable()
        table.dateTime('updated_at').defaultTo(knex.fn.now()).notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('vote_types')
}
