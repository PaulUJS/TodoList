const express = require('express')
const session = require('express-session')
const bodyParser = require("body-parser")
const workoutRoutes = require('./routes/workoutRoutes')
const mongoose = require('mongoose')
require("dotenv").config()

// Server set up

const app = express()

// Database config

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('server on')
    })
  })
  .catch((error) => {
    console.log(error)
  })

// Middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', (req,res,next) => {
  console.log(req.path, req.method)
  next()
})

// Session management

const oneDay = 1000 * 60 * 60 * 24

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        saveUninitialized: true,
        cookie: { maxAge: oneDay },
        resave: false 
    })
)

// Routes
app.use('/api/user', workoutRoutes)

app.use('/api/user/workouts', workoutRoutes)

// Authentication

app.post('/register', (req,res) => {

})

app.post('/signin', (req,res) => {

})

