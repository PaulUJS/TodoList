const express = require('express');
const Workout = require('../models/workoutModel');
const {
  getCollection,
  deleteCollection,
  getUserCollections
} = require('../controllers/CollectionController');

const router = express.Router();

router.get('/', getUserCollections);

router.get('/:groupID', getCollection);

router.delete('/:groupID', deleteCollection);

module.exports = router;