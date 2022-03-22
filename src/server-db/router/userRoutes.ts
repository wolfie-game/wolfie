import {Router} from 'express'
import {UserAPI} from '../../api/user-api-db'

export const userRoutes = (router: Router) => {
  const userRouter: Router = Router()

  userRouter
  .get('/', UserAPI.get)
  .post('/create', UserAPI.create)
  .post('/update', UserAPI.update)

  router.use('/user', userRouter)
}
