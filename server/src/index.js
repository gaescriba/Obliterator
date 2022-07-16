import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import { dbConnection } from './database/index.js'
import { router as apiRouter } from './network/index.js'

const PORT = process.env.PORT

const main = async () => {
  const app = express()
  app.use(morgan('dev'))
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use('/api', apiRouter)
  ;(await dbConnection()).connect()

  app.listen(PORT, () => console.log(`Obliterator running at port: ${PORT}`))
}

main()
