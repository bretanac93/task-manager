const logger = require('@lengoo/logger');
const debug = require('../lib/debugger');
const CommentRepository = require('../repositories/example');

class ExampleController {
  constructor() {
    this.moduleName = 'main-controller';
  }

  async getAll(req, res) {
    try {
      const comments = CommentRepository.findAll();
      res.json(comments);
    } catch (error) {
      debug(this.moduleName, error.message);
      logger.error(error.message);
    }
  }
}

module.exports = ExampleController;
