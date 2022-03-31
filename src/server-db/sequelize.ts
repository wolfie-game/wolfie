import {Sequelize, SequelizeOptions} from 'sequelize-typescript';
import {User} from './models/user'
import {Topic} from './models/topic'
import {Comment} from './models/comment'
import {UserTheme} from './models/UserTheme'

const sequelizeOptions: SequelizeOptions = {
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'newPassword',
  database: 'my-db-name',
  dialect: 'postgres',
}

const sequelize = new Sequelize(sequelizeOptions)

sequelize.addModels([User, Topic, Comment, UserTheme])

export async function dbConnect() {
  try {
    await sequelize.authenticate()
    await sequelize.sync({alter: true})
    console.log('Connected successfully to DB.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
