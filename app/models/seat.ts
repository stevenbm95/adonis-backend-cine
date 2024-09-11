import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Seat extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare location: string

  @column()
  declare reclining: boolean


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}