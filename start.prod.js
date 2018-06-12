const express = require('express');
const bodyParser = require('body-parser');
const paths = require('./webpack/paths');
const manifest = {
  client: require('./build/assets/asset-manifest'),
};
const serverRender = require('./build/server/bundle.server.js').default;

const PORT_NUMBER = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Static assets
// Set max-age for all static assets to 1 month.
app.use(function (req, res, next) {
  // Prevent /service-worker.js from being cached so updates can be scheduled when the file changes.
  if (req.url !== '/service-worker.js') {
    res.header('Cache-Control', 'public, max-age=2592000')
  }
  next();
});
app.use(express.static(paths.buildPath));
app.use(express.static(paths.buildStaticPath));
app.use(serverRender(manifest));

app.listen(PORT_NUMBER, () => {
  console.log(`Production server is running at port ${PORT_NUMBER}`);
});

