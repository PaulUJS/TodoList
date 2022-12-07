const mongoose = require('mongoose');

// Creates schema
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  name: {
      type: String,
      required: true
  },
  type: {
      type: String,
      required: true
  },
  userID: {
    type: String,
    required: false
  }
}, {timestamps: true});

module.exports = mongoose.model('Group', groupSchema);