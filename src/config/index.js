const path = require('path');

require('dotenv').config({
  path: path.resolve(process.cwd(), '.env'),
});

module.exports = {
  dbUrl: process.env.DB_URL || 'mongodb://localhost/task_manager',
  appEnv: process.env.NODE_ENV || 'development', // only production,development,test
  appName: process.env.APP_NAME,
  appPort: process.env.APP_PORT || 3000,
  appSecret: process.env.APP_SECRET || 'ChangeMe',
};
