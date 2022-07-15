const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const redis = require('redis')
const connectRedis = require('connect-redis')
const session = require('express-session')
const apiRouter = require('./routes/api')

//comentario del elias v2

const app = express()
const redisStore = connectRedis(session)

const redisClient = redis.createClient({
  port: 6379,
  host: 'localhost'
})

require('./db')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// app.use(session({
//   store: new redisStore({
//     client: redisClient,
//     secret: 'obliteratorSecret',
//     saveUninitialized: false,
//     resave: false,
//     cookie: {
//       secure: false,
//       httpOnly: true,
//       maxAge: 1000 * 60 * 30 //30 minutes session 
//     }
//   })
// }))
app.use('/api', apiRouter)

app.listen(3003, () => console.log('server running'))
