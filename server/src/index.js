const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { dbConnection } = require('./database')

const main = async () => {
  const app = express()
  app.use(morgan('dev'))
  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  // app.use('/api', apiRouter)
  ;(await dbConnection()).connect()

  app.listen(3003, () => console.log('server running'))
}

main()
