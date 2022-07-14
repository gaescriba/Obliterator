const router = require('express').Router()

const apiUserRouter = require('./api/User')
const apiAccountRouter = require('./api/Account')

router.use('/Users', apiUserRouter)
router.use('/Accounts', apiAccountRouter)
router.get('/', (req,res) => res.send("en endpoint api"))
module.exports = router
