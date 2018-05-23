const clientConfig = require('./client.prod');
const serverConfig = require('./server.prod');

// BASE_URL env variable must be required.

if (process.env.NODE_ENV !== 'production') {
}

if (!process.env.PUBLIC_URL) {
  throw new Error(
    'The PUBLIC_URL environment variable is required.' +
    ' Various `<head>` tags depend on it, as well as some internal references.'
  );
}

module.exports = [clientConfig, serverConfig];
