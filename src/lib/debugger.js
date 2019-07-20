const debug = require('debug');

module.exports = (namespace, message) => {
  const d = debug(`app:${namespace}`);
  d(message);
  d.destroy();
};
