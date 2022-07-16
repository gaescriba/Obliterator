const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const { dbConnection } = require('./database')
const apiRouter = require('./network')

const PORT = process.env.PORT

const main = async () => {
  const app = express()
  app.use(morgan('dev'))
  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use('/api', apiRouter)
  ;(await dbConnection()).connect()

  app.listen(PORT, () => console.log(`Obliterator running at port: ${PORT}`))
}

main()
