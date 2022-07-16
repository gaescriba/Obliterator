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

export { uploadModels }
