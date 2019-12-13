'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ModelTypeSchema extends Schema {
  up () {
    this.create('model_types', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('model_types')
  }
}

module.exports = ModelTypeSchema
