'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EcommerceModelSchema extends Schema {
  up () {
    this.create('ecommerce_models', (table) => {
      table.increments()
      table.json('data')
      table.integer('ecommerce_id').unsigned().notNullable()
      table.foreign('ecommerce_id').references('id').inTable('ecommerces')
      table.integer('model_type_id').unsigned().notNullable()
      table.foreign('model_type_id').references('id').inTable('model_types')
      table.timestamps()
    })
  }

  down () {
    this.drop('ecommerce_models')
  }
}

module.exports = EcommerceModelSchema
