// const Cloudinary = require('../../utils/cloudinary')
// const Models = require('../../src/models/3dModels')
const upload = require('../../utils/multerFiles')
const { uploadImage } = require('../../utils/imageUploader')

/**
 * @param {import('express').Router} router
 * @param {String} prefix
 */
const route3dModels = (router, prefix = '/models') => {
  // Subir modelos
  router.post(`${prefix}/`, upload.single('file'), async (req, res) => {
    try {
      const result = await uploadImage(req.file.path)
      // const models = new Models({
      //   model_name: req.body.model_name,
      //   model_url: result.secure_url,
      //   price: req.body.price
      // })

      res.json(result.secure_url)
    } catch (error) {
      res.send(error)
    }
  })

  // Preguntar Models
  router.get(`${prefix}/`, async (req, res) => {
    res.json('Holi')
  })

  // router.put(`${prefix}/:modelName`, async () => {})

  // router.delete(`${prefix}/:modelName`, async (req, res) => {
  //   const models = await Models.findAll(req.params.id)

  //   if (!models) return res.status(404).send('El modelo con ese id no existe')

  //   res.status(200).send('Modelo borrado')
  // })
}

module.exports = route3dModels
