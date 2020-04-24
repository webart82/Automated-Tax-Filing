'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SocialAccountsSchema extends Schema {
  up () {
    this.create('social_accounts', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('social_accounts')
  }
}

module.exports = SocialAccountsSchema
