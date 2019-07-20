const { Schema, model } = require('mongoose');

const ColumnSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = model('Column', ColumnSchema);
