const mongoose = require('mongoose');

const { Schema } = mongoose;

module.exports = new Schema({
  author: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});
