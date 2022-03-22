import express from 'express'
import serverRenderMiddleware from '../../server-render-middleware'
import {themesRoutes} from './themesRoutes'
import {topicRoutes} from './topicRoutes'
import {userRoutes} from './userRoutes'

const router = express.Router()

themesRoutes(router)
topicRoutes(router)
userRoutes(router)

router.get('/*', serverRenderMiddleware)

export default router
