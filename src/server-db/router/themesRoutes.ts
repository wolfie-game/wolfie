import {Router} from 'express'
import {ThemeAPI} from '../../api/theme-api'

export const themesRoutes = (router: Router) => {
  const themesRouter: Router = Router()

  themesRouter
    .post('/', ThemeAPI.update)
    .get('/', ThemeAPI.get)

  router.use('/theme', themesRouter)
}
