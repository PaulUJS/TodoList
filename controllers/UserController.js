const User = require('../models/userModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

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

async function createUser(req,res) {
  const { email, password } = req.body;

  const saltRounds = 10;
  const hashedPass = await bcrypt.hash(password, saltRounds);
  
  const checkEmail = await User.findOne(
    {email: email}
  );

  if (checkEmail) {
    console.log('Email already in use');
    res.status(404);
  } else if (!checkEmail) {
    const newUser = User.create({email: email, password: hashedPass});
    res.status(200);
  }
}

async function validateUser(req,res) {
  const { email, password } = req.body;

  const findUser = await User.findOne(
    {email: email}
  );

  if (!findUser) {
    res.status(404);
  } else if (findUser) {
    const hashedPass = findUser.password;
    const userID = findUser.id;

    if (await bcrypt.compare(password, hashedPass) == true) {
      req.session.authenticated = true;
      req.session.id = userID;
      res.status(200);
    }
  }
}

module.exports = {
  createUser,
  validateUser
}