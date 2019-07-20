const Comments = require('../models/comment');
const CommentValidator = require('../validators/comment');

class CommentsRepository {
  static async findAll() {
    return Comments.find();
  }

  static async create(obj) {
    const comment = await new CommentValidator(obj);
    return Comments.create(comment);
  }
}

module.exports = CommentsRepository;
