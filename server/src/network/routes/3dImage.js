/**
 * @param {import('express').Router} router
 * @param {String} prefix
 */
const route3dImage = (router, prefix = '/images') => {
  router.get(`${prefix}/`, async (req, res) => {
    // const Accounts = await Account.findAll()
    // res.json(Users)
  })
}

module.exports = route3dImage
