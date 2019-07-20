module.exports.getCustomData = function (cb) {
  return this.model('Comment').find({}, cb);
};
