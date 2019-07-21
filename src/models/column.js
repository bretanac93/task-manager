const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const { Schema, model, Types } = mongoose;

const ColumnSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      slug: 'title',
      unique: true,
    },
    tasks: [{
      type: Schema.Types.ObjectId,
      ref: 'Task',
    }],
  },
  {
    timestamps: true,
  },
);

module.exports = model('Column', ColumnSchema);
