'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StoreSchema extends Schema {
  up () {
    this.create('stores', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.json('auth').notNullable()
      table.integer('ecommerce_id').unsigned().notNullable()
      table.foreign('ecommerce_id').references('id').inTable('ecommerces')
      table.timestamps()
    })
  }

  down () {
    this.drop('stores')
  }
}

module.exports = StoreSchema
