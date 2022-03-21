import path from 'path'
import express from 'express'
import compression from 'compression'
import 'babel-polyfill'
// import serverRenderMiddleware from './server-render-middleware'
import {dbConnect} from './server-db/sequelize'
import router from './server-db/router/router'

const app = express()

dbConnect()

app
  .use(express.static(path.resolve(__dirname, '../build')))
  .use(express.static(path.resolve(__dirname, '../static')))

app.get('/sw.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'sw.js'))
})

app.use(router)

export {app}
