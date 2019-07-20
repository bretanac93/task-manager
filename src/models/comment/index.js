const mongoose = require('mongoose');

const ModelSchema = require('./schema');
const ModelMiddlewares = require('./middlewares');

ModelSchema.statics = require('./statics');
ModelSchema.methods = require('./methods');

ModelMiddlewares.pre.forEach((middleware) => {
  ModelSchema.pre(middleware.action, middleware.hook);
});

ModelMiddlewares.post.forEach((middleware) => {
  ModelSchema.post(middleware.action, middleware.hook);
});

module.exports = mongoose.model('Comment', ModelSchema);
