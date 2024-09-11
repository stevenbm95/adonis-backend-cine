import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'projectors'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('brand')
      table.integer('high')
      table.integer('width')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}