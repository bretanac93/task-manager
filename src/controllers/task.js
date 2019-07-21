const taskRepository = require('../repositories/task');

function handleError(res, err) {
  return res.status(400).send({
    message: err.message,
  });
}

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
  const { title, content, type } = req.body;
  try {
    const task = await taskRepository.create({ title, content, type });
    return res.status(201).send({
      result: task,
    });
  } catch (error) {
    return handleError(res, error);
  }
}

async function update(req, res) {
  const { id } = req.params;
  const { title, content, type } = req.body;

  try {
    const task = await taskRepository.update(id, { title, content, type });
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
