const { Validator } = require('@lengoo/validator');
const rules = require('./rules');

class CommentValidator extends Validator {
  constructor(obj) {
    super(obj, rules);
  }
}

module.exports = CommentValidator;
