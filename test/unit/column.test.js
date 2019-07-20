const { assert } = require('chai');

const setup = require('../setup');
const columnRepository = require('../../src/repositories/column');

describe('Validate columns creation', () => {
  setup();
  it('should create a new column', async () => {
    try {
      const column = await columnRepository.create({
        title: 'Todo',
      });
      assert.equal(column.title, 'Todo');
    } catch (error) {
      assert.isNull(error);
    }
  });
  it('should retrieve all the columns', async () => {
    try {
      const column = await columnRepository.getAll();
      assert.equal(column.length, 1);
    } catch (error) {
      assert.isNull(error);
    }
  });
  it('should get first column', async () => {
    try {
      const columns = await columnRepository.getAll();
      assert.equal(columns[0].title, 'Todo');
    } catch (error) {
      assert.isNull(error);
    }
  });
  it('should update the first column', async () => {
    try {
      const columns = await columnRepository.getAll();
      const { _id: id } = columns[0];
      const newColumn = await columnRepository.update(id, { title: 'New Todo' });
      assert.equal(newColumn.title, 'New Todo');
    } catch (error) {
      assert.isNull(error);
    }
  });
  it('should remove the first column', async () => {
    try {
      let columns = await columnRepository.getAll();
      const { _id: id } = columns[0];
      await columnRepository.remove(id);
      columns = await columnRepository.getAll();
      assert.isEmpty(columns);
    } catch (error) {
      assert.isNull(error);
    }
  });
});
