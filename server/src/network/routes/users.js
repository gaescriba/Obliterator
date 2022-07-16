/**
 * @param {import('express').Router} router
 * @param {String} prefix
 */
const routeUsers = (router, prefix = '') => {
  router.get(`${prefix}/`, async (req, res) => {
    // const Accounts = await Account.findAll()
    // res.json(Users)
  })
}

module.exports = routeUsers
