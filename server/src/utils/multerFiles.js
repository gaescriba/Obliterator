const multer = require('multer')
const path = require('path')

const { allowedExtensions } = require('./constants')

// Multer config
module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname)

    if (!allowedExtensions.includes(ext)) {
      cb(new Error('No soporta ese formato'), false)

      return
    }

    cb(null, true)
  }
})
