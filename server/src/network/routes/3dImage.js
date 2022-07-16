/**
 * @param {import('express').Router} router
 * @param {String} prefix
 */
const api3dImageRouter = (router, prefix = '/images') => {
  router.get(`${prefix}/`, async (req, res) => {
    // const Accounts = await Account.findAll()
    // res.json(Users)
  })
}

export { api3dImageRouter }
