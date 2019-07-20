const { Schema, model } = require('mongoose');

const constants = require('../lib/constants');

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: constants.taskTypes,
    },
  },
  { timestamps: true },
);

module.exports = model('Task', TaskSchema);
