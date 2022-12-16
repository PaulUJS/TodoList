const User = require('../models/userModel');
const express = require('express');

const {
  createUser,
  validateUser,
  logoutUser
} = require('../controllers/userController');

const router = express.Router();

router.post('/register', createUser);

router.post('/validate', validateUser);

router.get('/logout', logoutUser);

module.exports = router;