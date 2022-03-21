import {
  Model,
  Table,
  Column,
  AutoIncrement,
  PrimaryKey,
  DataType,
  AllowNull,
  Unique,
  Index
} from 'sequelize-typescript'

@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'app_theme',
})

export class AppTheme extends Model<AppTheme> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @Index
  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  theme: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  description: string;
}
