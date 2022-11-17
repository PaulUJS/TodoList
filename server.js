const express = require('express')
const session = require('express-session')
const mysql = require('mysql2')


const app = express()

app.listen('3000', () => {
  console.log('server on')
})

app.get('/', (req,res) => {
  return
})