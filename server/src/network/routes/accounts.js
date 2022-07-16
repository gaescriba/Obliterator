/**
 * @param {import('express').Router} router
 * @param {String} prefix
 */
const routeAccounts = (router, prefix = '/accounts') => {
  router.get(`${prefix}/`, async (req, res) => {
    // const Accounts = await Account.findAll()
    // res.json(Users)
  })
  router.post(`${prefix}/`, async (req, res) => {
    // const UserObj = await Account.create(req.body)
    // res.json(UserObj)
  })
  router.get(`${prefix}/:accountName`, async (req, res) => {
    // const account_name_params = req.params.account_name
    // const UserByName = await Account.findAll({
    //   where: {
    //     account_name: account_name_params
    //   }
    // })
    // if (UserByName.length === 0) {
    //   res.status(404)
    //   res.send('user not found')
    // } else {
    //   req.sesssion.account_name = account_name_params
    //   res.json(UserByName[0])
    // }
  })
}

module.exports = routeAccounts
