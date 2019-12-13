'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MetaDataSchema extends Schema {
  up () {
    this.create('meta_data', (table) => {
      table.increments()
      table.integer('from').unsigned().notNullable()
      table.integer('to').unsigned().notNullable()
      table.integer('ecommerce_model_id').unsigned().notNullable()
      table.json('data').notNullable()
      table.enu('status',['processing','waiting','processed','fail','other'])
      table.text('description')
      table.foreign('from').references('id').inTable('stores')
      table.foreign('to').references('id').inTable('stores')
      table.foreign('ecommerce_model_id').references('id').inTable('ecommerce_models')
      table.timestamps()
    })
  }

  down () {
    this.drop('meta_data')
  }
}

module.exports = MetaDataSchema
