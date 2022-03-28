import {
  Model,
  Table,
  Column,
  AutoIncrement,
  PrimaryKey,
  DataType,
  AllowNull,
  Unique,
  ForeignKey,
} from 'sequelize-typescript'
import {User} from './user'

export type TopicAttributes = {
  id: number
  title: string
  authorId: number
  content: string
  createAt: string
  updateAt: string
  commentsIds: number[]
}
export type TopicCreateAttributes = {
  title: string
  content: string
  authorId: number
}

export type TopicUpdateAttributes = {
  id: number
  title: string
  content: string
}

@Table({
  timestamps: true,
  underscored: true,
  tableName: 'rps_topic',
})
export class Topic extends Model<TopicAttributes, TopicCreateAttributes> {
  @AutoIncrement
  @Unique
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number

  @AllowNull(false)
  @Column(DataType.STRING)
  title: string

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'author_id',
  })
  authorId: number

  @AllowNull(false)
  @Column(DataType.STRING)
  content: string
}
