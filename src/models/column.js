const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const { Schema, model } = mongoose;

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
  },
  {
    timestamps: true,
  },
);

ColumnSchema.post('remove', async function () {
  await this.model('Task').updateMany({ column: this._id }, { column: null });
});

module.exports = model('Column', ColumnSchema);
