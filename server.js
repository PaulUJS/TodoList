const express = require('express')
const session = require('express-session')
const mysql = require('mysql2')
const bodyParser = require("body-parser")
require("dotenv").config()


// Database set up

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) throw err
});

// Server set up

const app = express()

app.listen(process.env.PORT, () => {
  console.log('server on')
})

// Middleware for parsing data from the web pages
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const oneDay = 1000 * 60 * 60 * 24

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        saveUninitialized: true,
        cookie: { maxAge: oneDay },
        resave: false 
    })
)

function RenderList() {

}

app.post('/register', (req,res) => {

})

app.post('/signin', (req,res) => {

})