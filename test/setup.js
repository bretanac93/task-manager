const { MongoMemoryServer } = require('mongodb-memory-server-global');

const db = require('../src/lib/database');

let mongoServer;

module.exports = (dataFactory = null, fakeDataAmount = 10) => {
  before(async () => {
    mongoServer = new MongoMemoryServer();
    try {
      const connectionString = await mongoServer.getConnectionString();
      await db.connect(connectionString);
      if (dataFactory) {
        await dataFactory(fakeDataAmount);
      }
    } catch (error) {
      throw error;
    }
  });

  after(async () => {
    try {
      await db.disconnect();
      await mongoServer.stop();
    } catch (error) {
      throw error;
    }
  });
};
