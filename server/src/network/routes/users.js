/**
 * @param {import('express').Router} router
 * @param {String} prefix
 */
const apiUserRouter = (router, prefix = '/users') => {
  router.get(`${prefix}/`, async (req, res) => {
    // const Accounts = await Account.findAll()
    // res.json(Users)
  })
}

export { apiUserRouter }
