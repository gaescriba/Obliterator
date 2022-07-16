const multer = require('multer')
const path = require('path')

// Multer config
module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname)

    if (ext !== '.glb' && ext !== '.png' && ext !== '.Glitz ') {
      cb(new Error('No soporta ese formato'), false)

      return
    }

    cb(null, true)
  }
})
