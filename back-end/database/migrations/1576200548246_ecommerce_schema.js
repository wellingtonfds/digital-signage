'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EcommerceSchema extends Schema {
  up () {
    this.create('ecommerces', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('version').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('ecommerces')
  }
}

module.exports = EcommerceSchema
