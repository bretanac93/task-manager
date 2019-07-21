const { handleError } = require('./common');
const columnRepository = require('../repositories/column');

async function findAll(req, res) {
  try {
    const columns = await columnRepository.getAll();
    return res.send({
      result: columns,
    });
  } catch (error) {
    return handleError(res, error);
  }
}

async function findOne(req, res) {
  const columnId = req.params.id;
  try {
    const column = await columnRepository.getOne(columnId);
    return res.send({
      result: column,
    });
  } catch (error) {
    return handleError(res, error);
  }
}

async function create(req, res) {
  const { title } = req.body;
  try {
    const column = await columnRepository.create({ title });
    return res.status(201).send({
      result: column,
    });
  } catch (error) {
    return handleError(res, error);
  }
}

async function update(req, res) {
  const { id } = req.params;
  const { title } = req.body;

  try {
    const column = await columnRepository.update(id, { title });
    return res.send({
      result: column,
    });
  } catch (error) {
    return handleError(res, error);
  }
}

async function remove(req, res) {
  const { id } = req.params;
  try {
    const column = await columnRepository.remove(id);
    return res.send({
      result: column,
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
