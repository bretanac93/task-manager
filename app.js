const express = require('express');

const config = require('./src/config');
const db = require('./src/lib/database');
const debug = require('./src/lib/debugger');

const routes = require('./src/routes');

const app = express();

express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (config.appEnv !== 'test') {
  db.connect(config.dbUrl, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => debug('db', 'Successfully connected to database'))
    .catch(err => debug('db', err.message));
}


app.use('/api-docs', express.static('docs/api'));
app.use('/js-docs', express.static('docs/app'));

app.use('/api', routes);

module.exports = app;

const server = app.listen(config.appPort, () => {
  // debug('%O', config)
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
