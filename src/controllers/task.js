const { handleError } = require('./common');
const taskRepository = require('../repositories/task');

async function findAll(req, res) {
  try {
    const tasks = await taskRepository.getAll();
    return res.send({
      result: tasks,
    });
  } catch (error) {
    return handleError(res, error);
  }
}

async function findOne(req, res) {
  const taskId = req.params.id;
  try {
    const task = await taskRepository.getOne(taskId);
    return res.send({
      result: task,
    });
  } catch (error) {
    return handleError(res, error);
  }
}

async function create(req, res) {
  const {
    title, content, type, column, score,
  } = req.body;
  try {
    const task = await taskRepository.create({
      title,
      content,
      type,
      column,
      score,
    });
    return res.status(201).send({
      result: task,
    });
  } catch (error) {
    return handleError(res, error);
  }
}

async function update(req, res) {
  const { id } = req.params;
  const {
    title, content, type, column, score,
  } = req.body;

  try {
    const task = await taskRepository.update(id, {
      title,
      content,
      type,
      column,
      score,
    });
    return res.send({
      result: task,
    });
  } catch (error) {
    return handleError(res, error);
  }
}

async function remove(req, res) {
  const { id } = req.params;
  try {
    const task = await taskRepository.remove(id);
    return res.send({
      result: task,
    });
  } catch (error) {
    return handleError(res, error);
  }
}

module.exports = {
  findAll,
  findOne,
  create,
  update,
  remove,
};
