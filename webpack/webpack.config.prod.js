const clientConfig = require('./client.prod');
const serverConfig = require('./server.prod');

// TODO: NODE_ENV=production must be required.

if (process.env.NODE_ENV !== 'production') {
}

if (!process.env.LOCAL && !process.env.PUBLIC_URL) {
  throw new Error(
    'The PUBLIC_URL environment variable is required.' +
    ' Various `<head>` tags depend on it, as well as some internal references.'
  );
}

module.exports = [clientConfig, serverConfig];
