const { assert } = require('chai');

const setup = require('../setup');
const taskRepository = require('../../src/repositories/task');

describe('Validate tasks creation', () => {
  setup();
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
      assert.equal(tasks.length, 1);
    } catch (error) {
      assert.isNull(error);
    }
  });
  it('should get first column', async () => {
    try {
      const tasks = await taskRepository.getAll();
      assert.equal(tasks[0].title, 'Frontend');
    } catch (error) {
      assert.isNull(error);
    }
  });
  it('should update the first column', async () => {
    try {
      const tasks = await taskRepository.getAll();
      const { _id: id } = tasks[0];
      const newTask = await taskRepository.update(id, { title: 'New Task' });
      assert.equal(newTask.title, 'New Task');
    } catch (error) {
      assert.isNull(error);
    }
  });
  it('should remove the only element in the list', async () => {
    try {
      let tasks = await taskRepository.getAll();
      const { _id: id } = tasks[0];
      await taskRepository.remove(id);
      tasks = await taskRepository.getAll();

      assert.isEmpty(tasks);
    } catch (error) {
      assert.isNull(error);
    }
  });
});
