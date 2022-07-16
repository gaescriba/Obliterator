const router = require('express').Router()
const Cloudinary = require('../../utils/cloudinary')
const Modelos = require('../../src/models/3dModels')
const upload = require('../../utils/multerFIles')

// Subir modelos
router.post('/', upload.single('file'), async (req, res) => {
  try {
    const result = await Cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    })
    const modelos = new Modelos({
      model_name: req.body.model_name,
      model_url: result.secure_url,
      price: req.body.price
    })

    res.json(modelos)
  } catch (error) {
    res.send(error)
  }
})

// Preguntar modelos
router.get('/', async (req, res) => {
  const modelos = await Modelos.findAll()
  res.json(modelos)
})

router.put('/:modelName', async () => {})

router.delete('./:modelName', async (req, res) => {
  const modelos = await Modelos.findAll(req.params.id)

  if (!modelos) return res.status(404).send('El modelo con ese id no existe')

  res.status(200).send('Modelo borrado')
})

module.exports = router
