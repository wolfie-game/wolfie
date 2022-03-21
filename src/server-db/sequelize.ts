import {Sequelize} from 'sequelize-typescript'
import {User} from './models/user'
import {Topic} from './models/topic'
import {Comment} from './models/comment'
import {UserTheme} from './models/UserTheme'
// import {AppTheme} from './models/AppTheme'

export const db = new Sequelize({
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'newPassword',
  database: 'my-db-name',
  dialect: 'postgres',
})
db.addModels([User, Topic, Comment, UserTheme])

export async function dbConnect() {
  try {
    await db.authenticate()
    await db.sync({alter: true})
    console.log('Connection successfully to DB.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
