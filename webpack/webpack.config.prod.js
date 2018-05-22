const clientConfig = require('./client.prod');
const serverConfig = require('./server.prod');

if (process.env.NODE_ENV !== 'production') {
  throw new Error('Production builds must have NODE_ENV=production.');
}

module.exports = [clientConfig, serverConfig];
