const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const { Schema, model } = mongoose;

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
    slug: {
      type: String,
      slug: 'title',
      unique: true,
    },
    column: {
      type: Schema.Types.ObjectId,
      ref: 'Column',
      required: false,
      default: null,
    },
    score: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

module.exports = model('Task', TaskSchema);
