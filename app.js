const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./src/routes');
const config = require('./src/config');
const db = require('./src/lib/database');
const debug = require('./src/lib/debugger');

const app = express();

express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (config.appEnv !== 'test') {
  app.use(morgan('dev'));
  db.connect(config.dbUrl, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => debug('db', 'Successfully connected to database'))
    .catch(err => debug('db', err.message));
}

app.use('/api', routes);
app.use('/api-docs', express.static('docs/api'));
app.use('/js-docs', express.static('docs/app'));

module.exports = app;

const server = app.listen(config.appPort, () => {
  debug('entrypoint', `Server running on port: ${config.appPort}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  debug('entrypoint', 'Closing HTTP server');
  server.close(() => {
    debug('entrypoint', 'HTTP server closed');
    db.disconnect()
      .then(() => {
        debug('entrypoint', 'DB connection closed');
        process.exit(0);
      })
      .catch(err => debug('entrypoint', err.message));
  });
});
