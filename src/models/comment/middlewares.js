module.exports = {
  pre: [{
    action: 'remove',
    hook(next) {
      next();
    },
  }],
  post: [],
};
