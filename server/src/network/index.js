import { Router } from 'express'
import {
  api3dImageRouter,
  api3dModelsRouter,
  apiAccountsRouter,
  apiUserRouter
} from './routes/index.js'

const router = Router()
const routers = [
  api3dImageRouter,
  api3dModelsRouter,
  apiAccountsRouter,
  apiUserRouter
]

routers.forEach(routerFn => routerFn(router))
router.get('/', (req, res) => res.send('en endpoint api'))

export { router }
