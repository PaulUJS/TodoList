const User = require('../models/userModel');
const express = require('express');

const {
  createUser,
  validateUser
} = require('../controllers/userController');

const router = express.Router();

router.post('/register', createUser);

router.post('/validate', validateUser);

module.exports = router;