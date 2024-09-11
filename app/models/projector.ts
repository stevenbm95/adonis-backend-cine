import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Projector extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare brand: string

  @column()
  declare high: number

  @column()
  declare width: number


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}