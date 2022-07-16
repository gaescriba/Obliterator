/* eslint-disable camelcase */
import {
  getAllModels,
  updateModel,
  uploadModels
} from '../../services/3dModels.js'
import { multerInstance as multer } from '../../utils/index.js'
import { response } from '../response.js'

/**
 * @param {import('express').Router} router
 * @param {String} prefix
 */
const api3dModelsRouter = (router, prefix = '/models') => {
  // Upload models
  router.post(`${prefix}/`, multer.single('file'), async (req, res) => {
    try {
      const {
        body: { model_name: modelName, price },
        file: { path }
      } = req
      const model = await uploadModels({
        path,
        modelName,
        price: parseInt(price)
      })

      response({
        response: res,
        error: false,
        message: model,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: 3dModels.js ~ line 28 ~ router.post ~ error',
        error
      )
      response({ response: res })
    }
  })

  // Get models
  router.get(`${prefix}/`, async (req, res) => {
    try {
      const models = await getAllModels()

      response({
        response: res,
        error: false,
        message: models,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: 3dModels.js ~ line 48 ~ router.get ~ error',
        error
      )
      response({ response: res })
    }
  })

  // Update model
  router.patch(`${prefix}/:modelID`, async (req, res) => {
    try {
      const {
        body: { model_name, image_url, price, project_id, polygons_id },
        params: { modelID }
      } = req
      const modelUpdated = await updateModel(parseInt(modelID), {
        model_name,
        image_url,
        price,
        project_id,
        polygons_id
      })

      response({
        response: res,
        error: false,
        message: modelUpdated,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: 3dModels.js ~ line 62 ~ router.patch ~ error',
        error
      )
      response({ response: res })
    }
  })

  // router.delete(`${prefix}/:modelName`, async (req, res) => {
  //   const models = await Models.findAll(req.params.id)

  //   if (!models) return res.status(404).send('El modelo con ese id no existe')

  //   res.status(200).send('Modelo borrado')
  // })
}

export { api3dModelsRouter }
