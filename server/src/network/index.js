const router = require('express').Router()

const apiUserRouter = require('./routes/users')
const apiAccountsRouter = require('./routes/accounts')
const api3dImageRouter = require('./routes/3dImage')
const api3dModelsRouter = require('./routes/3dModels')

const routers = [
  apiUserRouter,
  apiAccountsRouter,
  api3dModelsRouter,
  api3dImageRouter
]

routers.forEach(routerFn => routerFn(router, '/models'))
router.get('/', (req, res) => res.send('en endpoint api'))

module.exports = router
