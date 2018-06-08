const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const paths = require('./webpack/paths');
const manifest = {
  client: require('./build/assets/asset-manifest'),
};
const serverRender = require('./build/server/bundle.server.js').default;

const PORT_NUMBER = process.env.PORT || 8080;

const app = express();
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(paths.buildPath));
app.use(express.static(paths.buildStaticPath));
app.use(serverRender(manifest));

app.listen(PORT_NUMBER, () => {
  console.log(`Production server is running at port ${PORT_NUMBER}`);
});

