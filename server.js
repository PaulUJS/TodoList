const express = require('express');
const session = require('express-session');
const bodyParser = require("body-parser");
const workoutRoutes = require('./routes/workoutRoutes');
const workoutController = require('./controllers/workoutController');
const userRoutes = require('./routes/userRoutes');
const userController = require('./controllers/UserController');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

// Server set up

const app = express();

app.use(cors());

// Database config

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('server on');
    })
  })
  .catch((error) => {
    console.log(error);
  })

// Middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', (req,res,next) => {
  console.log(req.path, req.method);
  next();
});

// Session management

const oneDay = 1000 * 60 * 60 * 24;

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        saveUninitialized: true,
        cookie: { maxAge: oneDay },
        resave: false 
    })
);

// Routes
app.use('/api/workouts', workoutRoutes);

app.use('/api/user', userRoutes);


