const express = require('express')
const session = require('express-session')
const mysql = require('mysql2')
require("dotenv").config()



const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) throw err
});

const app = express()

app.listen(process.env.PORT, () => {
  console.log('server on')
})

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

app.get('/register', (req,res) => {

})

app.post('/register', (req,res) => {

})

app.get('/signin', (req,res) => {

})

app.post('/signin', (req,res) => {

})