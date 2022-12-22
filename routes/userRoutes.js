const User = require('../models/userModel');
const express = require('express');

const {
  createUser,
  validateUser,
  updateUserLikes,
  getUserLikes
} = require('../controllers/userController');

const router = express.Router();

router.get('/likes', getUserLikes);

router.post('/register', createUser);

router.post('/validate', validateUser);

router.put('/updateLikes', updateUserLikes);

module.exports = router;