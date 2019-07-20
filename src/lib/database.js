const mongoose = require('mongoose');

const connect = async (dbUrl, opts) => {
  if (!dbUrl) {
    throw new Error('Database url not defined');
  }
  await mongoose.connect(dbUrl, opts);
};

const disconnect = async () => {
  await mongoose.connection.close(false);
};

module.exports = {
  connect,
  disconnect,
};
