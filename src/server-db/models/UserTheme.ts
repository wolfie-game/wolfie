import {
  Model,
  Table,
  Column,
  AutoIncrement,
  PrimaryKey,
  DataType,
  AllowNull,
  ForeignKey,
  Unique,
} from 'sequelize-typescript'
import {AppTheme} from './appTheme'

type UserTheme = {
  id: number
  login: string
  avatar?: string
}

@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'user_theme',
})

export class UserTheme extends Model<UserTheme> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  theme: string;

  @Column(DataType.STRING)
  device: string;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'owner_id'
  })
  ownerId: string;
}
