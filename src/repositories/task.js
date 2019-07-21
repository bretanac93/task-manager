const Task = require('../models/task');
const { taskTypes } = require('../lib/constants');

const isValidType = type => taskTypes.includes(type);

async function getAll() {
  const tasks = await Task.find();
  return tasks.map(item => item.toObject());
}

async function getOne(id) {
  const task = await Task.findById(id);
  return task.toObject();
}

async function create(obj) {
  if (!isValidType(obj.type)) {
    throw new Error('Invalid type');
  }
  const task = await Task.create(obj);
  return task.toObject();
}

async function update(id, updObj) {
  if (updObj.type && !isValidType(updObj.type)) {
    throw new Error('Invalid type');
  }
  const task = await Task.findByIdAndUpdate(id, updObj, { new: true });
  return task.toObject();
}

async function remove(id) {
  return Task.findByIdAndDelete(id);
}

async function getByColumn(columnId) {
  const tasks = await Task.find({ column: columnId });
  return tasks;
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
  getByColumn,
};
