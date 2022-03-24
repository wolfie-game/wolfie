import {
  Model,
  Table,
  Column,
  AutoIncrement,
  PrimaryKey,
  DataType,
  AllowNull,
  ForeignKey,
  Default
} from 'sequelize-typescript'
import {User} from './user'

type UserThemeAttributes = {
  id: number;
  theme: string;
  ownerId: number;
}

type UserThemeCreationAttributes = Omit<UserThemeAttributes, 'id'>

@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'user_theme',
})

export class UserTheme extends Model<UserThemeAttributes, UserThemeCreationAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @Default('dark')
  @AllowNull(false)
  @Column(DataType.STRING)
  theme: string;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'owner_id'
  })
  ownerId: number;
}
