import path from 'path'
import express from 'express'
import compression from 'compression'
import 'babel-polyfill'
import serverRenderMiddleware from './server-render-middleware'

const app = express()

app.use(express.static(path.resolve(__dirname, '../build')))
    // .use(express.static(path.resolve(__dirname, '../static')))

app.get('/*', serverRenderMiddleware)

export {app}
