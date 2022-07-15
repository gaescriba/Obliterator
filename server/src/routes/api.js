const router = require('express').Router()

const apiUserRouter = require('./api/User')
const apiAccountRouter = require('./api/Account')
const api3dModelsRouter = require('./api/3dModels')
router.use('/Users', apiUserRouter)
router.use('/Accounts', apiAccountRouter)
router.use('/Modelos', api3dModelsRouter)
router.get('/', (req,res) => res.send("en endpoint api"))
module.exports = router
