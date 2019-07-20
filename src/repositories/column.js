const Column = require('../models/column');

async function getAll() {
  const columns = await Column.find();
  return columns.map(item => item.toObject());
}

async function getOne(id) {
  const column = await Column.findById(id);
  return column.toObject();
}

async function create({ title }) {
  const column = await Column.create({ title });
  return column.toObject();
}

async function update(id, { title }) {
  const column = await Column.findByIdAndUpdate(id, { title }, { new: true });
  await column.save();
  return column.toObject();
}

async function remove(id) {
  return Column.findByIdAndDelete(id);
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
