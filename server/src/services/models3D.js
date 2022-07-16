import {
  deleteOneModel,
  getAllModels,
  storeModel,
  updateOneModel
} from '../database/queries/models3D.js'
import { uploadImage } from '../utils/index.js'

/**
 * @param {Object} args
 * @param {String} args.path
 * @param {String} args.modelName
 * @param {Number} args.price
 * @returns Model object
 */
const uploadModel = async ({ path, modelName, price }) => {
  const result = await uploadImage(path)

  return await storeModel({
    modelName,
    imageUrl: result.secure_url,
    price
  })
}

const getModels = async () => {
  return await getAllModels()
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
  return await updateOneModel(modelID, modelData)
}

/**
 * @param {Number} modelID
 */
const deleteModel = async modelID => {
  return await deleteOneModel(modelID)
}

export { uploadModel, getModels, updateModel, deleteModel }
