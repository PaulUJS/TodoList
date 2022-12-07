const Group = require('../models/groupModel');
const express = require('express');

const {
  getAllCollections,
  getSingleCollection,
  getCollectionByUser,
  createCollection,
  editCollection,
  deleteCollection
} = require('../controllers/GroupController');

const router = express.Router();

router.get('/', getAllCollections);

router.get('/:user_id', getCollectionByUser);

router.get('/:id', getSingleCollection);

router.post('/:user_id', createCollection);

router.put('/:id', editCollection);

router.delete('/:id', deleteCollection);

module.exports = router;