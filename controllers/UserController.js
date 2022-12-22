const User = require('../models/userModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const express = require("express");



const app = express();

async function createUser(req,res) {
  const { email, password, displayName } = req.body;

  const saltRounds = 10;
  const hashedPass = await bcrypt.hash(password, saltRounds);
  
  const checkEmail = await User.findOne(
    {email: email}
  );

  const checkName = await User.findOne(
    {displayName: displayName}
  );

  if (checkEmail) {
    console.log('Email already in use');
    res.status(404);
  } 
  if (checkName) {
    console.log('Display Name already in use');
    res.status(404)
  } else if (!checkEmail || checkName) {
    const newUser = await User.create({displayName: displayName, email: email, password: hashedPass});
    res.status(200).json(newUser);
  }
};

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
      res.status(200).json(findUser);
      console.log('logged in');
    }
  }
};

async function updateUserLikes(req,res) {
  const { _id, likes } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({error: 'no user found'});
  } else {
    const updateUser = await User.findOneAndUpdate({_id: _id}, {
      $push: {likes: likes}
    });
  }
  res.status(200);
};

async function getUserLikes(req,res) {
  const { _id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({error: 'no user found'});
  } else {
    const findUserLikes = await User.findById(_id);
    res.status(200).json(findUserLikes);
  }
}

module.exports = {
  createUser,
  validateUser,
  updateUserLikes,
  getUserLikes
};