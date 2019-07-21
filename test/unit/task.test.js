const { assert } = require('chai');

const setup = require('../setup');
const taskRepository = require('../../src/repositories/task');

const dataFactory = require('../factories');

describe('Validate tasks creation', () => {
  setup(dataFactory, 10);
  it('should create a new task', async () => {
    try {
      const task = await taskRepository.create({
        title: 'Frontend',
        content: 'Do whatever you want, attached are the designs',
        type: 'bug',
      });
      assert.equal(task.title, 'Frontend');
    } catch (error) {
      assert.isNull(error);
    }
  });
  it('should retrieve all the tasks', async () => {
    try {
      const tasks = await taskRepository.getAll();
      assert.isAtLeast(tasks.length, 1);
    } catch (error) {
      assert.isNull(error);
    }
  });
  it('should get last created task', async () => {
    try {
      const tasks = await taskRepository.getAll();
      assert.equal(tasks[tasks.length - 1].title, 'Frontend');
    } catch (error) {
      assert.isNull(error);
    }
  });
  it('should update the first task', async () => {
    try {
      const tasks = await taskRepository.getAll();
      const { _id: id } = tasks[0];
      const newTask = await taskRepository.update(id, { title: 'New Task' });
      assert.equal(newTask.title, 'New Task');
    } catch (error) {
      assert.isNull(error);
    }
  });
  it('should remove one task from the collection', async () => {
    try {
      let tasks = await taskRepository.getAll();
      const { _id: id } = tasks[0];

      const lengthBefore = tasks.length;

      await taskRepository.remove(id);
      tasks = await taskRepository.getAll();
      const lengthAfter = tasks.length;

      assert.equal(lengthBefore - 1, lengthAfter);
    } catch (error) {
      assert.isNull(error);
    }
  });
});
