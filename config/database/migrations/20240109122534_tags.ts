import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('tags', function(table){
        table.uuid('id', {primaryKey:true}).defaultTo(knex.raw('uuid_generate_v4()'))
        table.string('tag_name').notNullable()
        table.string('tag_description').notNullable()
        table.dateTime('created_at').defaultTo(knex.fn.now()).notNullable()
        table.dateTime('updated_at').defaultTo(knex.fn.now()).notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('tags')
}
