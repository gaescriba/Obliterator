const router = require('express').Router()

const { Account } = require('../../db')

router.get('/', async (req,res) => {
    const Accounts = await Account.findAll()
    res.json(Users)
})
router.post('/', async (req,res) => {
    const UserObj = await Account.create(req.body)
    res.json(UserObj)
})
router.get('/:account_name', async (req,res) => {
  let account_name_params = req.params.account_name
  let UserByName = await Account.findAll({
    where: {
     account_name: account_name_params 
    }
  })
    if(UserByName.length == 0){
      res.status(404)
      res.send("user not found")
    }else{
      req.sesssion.account_name = account_name_params
      res.json(UserByName[0])
    }
})

module.exports = router
