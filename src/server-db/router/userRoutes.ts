import {Router} from 'express'
import {UserAPI} from '../../api/user-api-db'

export const themesRoutes = (router: Router) => {
  const themesRouter: Router = Router()

  themesRouter
  .get('/', UserAPI.get)
  .post('/create', UserAPI.create)
  .post('/update', UserAPI.update)

  router.use('/user', themesRouter)
}
