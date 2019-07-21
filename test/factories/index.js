const Task = require('../../src/models/task');
const Column = require('../../src/models/column');

const tasksFactory = require('./tasks');
const columnsFactory = require('./columns');

/**
 * Returns mongoose models.
 */
module.exports = async (amount = 10) => {
  const columns = columnsFactory(Math.ceil(amount / 2));

  const columnModels = await Column.create(columns);

  const firstColumn = columnModels[0].toObject();

  const tasks = tasksFactory(amount).map(item => ({
    ...item,
    column: firstColumn._id,
  }));

  await Task.create(tasks);
};
