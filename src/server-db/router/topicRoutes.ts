import {Router} from 'express'
import {TopicAPI} from '../controllers/topic-controller'

export const topicRoutes = (router: Router) => {
  const topicRouter: Router = Router()

  topicRouter
    .get('/', TopicAPI.get)
    .post('/create', TopicAPI.create)
    .post('/update', TopicAPI.update)

  router.use('/topics', topicRouter)
}
