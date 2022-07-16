import { getModels } from '../database/index.js'
import { uploadImage } from '../utils/index.js'

/**
 * @param {Object} args
 * @param {String} args.path
 * @param {String} args.modelName
 * @param {Number} args.price
 * @returns Model object
 */
const uploadModels = async ({ path, modelName, price }) => {
  const result = await uploadImage(path)
  const { Model3DModel } = getModels()
  const model = await Model3DModel.create({
    model_name: modelName,
    image_url: result.secure_url,
    price
  })

  return model.get()
}

const getAllModels = async () => {
  const { Model3DModel } = getModels()
  const models = await Model3DModel.findAll()

  return models.map(model => model.get())
}

/**
 * @param {Number} modelID
 * @param {Object} modelData
 * @param {String|undefined} modelData.model_name
 * @param {String|undefined} modelData.image_url
 * @param {Number|undefined} modelData.price
 * @param {String|undefined} modelData.project_id
 * @param {String|undefined} modelData.polygons_id
 */
const updateModel = async (modelID, modelData) => {
  const { Model3DModel } = getModels()

  await Model3DModel.update(modelData, {
    where: { model_id: modelID },
    limit: 1
  })

  const modelUpdated = await Model3DModel.findByPk(modelID)

  return modelUpdated.get()
}

/**
 * @param {Number} modelID
 */
const deleteModel = async modelID => {
  const { Model3DModel } = getModels()

  await Model3DModel.destroy({
    where: {
      model_id: modelID
    }
  })

  return 'El modelo fue borrado correctamente'
}

export { uploadModels, getAllModels, updateModel, deleteModel }
