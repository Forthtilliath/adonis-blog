import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.enum('role', ['admin', 'user']).defaultTo('user').notNullable()
    })
  }

  async down() {
    this.schema.table(this.tableName, (t) => t.dropColumn('role'))
  }
}
