const { assert } = require('chai');
const { ValidationError } = require('@lengoo/validator');

const setup = require('../setup');
const CommentsRepository = require('../../src/repositories/example');

describe('Validate comment creation', () => {
  setup();
  it('should create a comment', async () => {
    try {
      const comment = await CommentsRepository.create({
        author: 'John Doe',
        body: 'Hello World',
      });
      assert.equal(comment.author, 'John Doe');
      assert.equal(comment.body, 'Hello World');
    } catch (error) {
      assert.isNull(error);
    }
  });
  it('should fail to create a comment having a minimum length validation error', async () => {
    try {
      await CommentsRepository.create({
        body: 'Hi',
      });
    } catch (error) {
      if (error instanceof ValidationError) {
        assert.equal(error.field, 'body');
        assert.equal(error.rule, 'min');
      }
    }
  });
  it('should find only one comment in the database', async () => {
    try {
      const comments = await CommentsRepository.findAll();
      assert.isNotEmpty(comments);
      assert.equal(comments.length, 1);
      assert.equal(comments[0].author, 'John Doe');
    } catch (error) {
      assert.isNull(error);
    }
  });
});
