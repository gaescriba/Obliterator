import { getModels } from '../../database/index.js'
import { multerInstance as multer, uploadImage } from '../../utils/index.js'

/**
 * @param {import('express').Router} router
 * @param {String} prefix
 */
const api3dModelsRouter = (router, prefix = '/models') => {
  // Subir modelos
  router.post(`${prefix}/`, multer.single('file'), async (req, res) => {
    try {
      const result = await uploadImage(req.file.path)
      const { Model3DModel } = getModels()
      const model = await Model3DModel.create({
        model_name: req.body.model_name,
        image_url: result.secure_url,
        price: parseInt(req.body.price)
      })

      res.json(model.get())
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

export { api3dModelsRouter }
