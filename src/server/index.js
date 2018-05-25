import React from 'react';
import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import App from '../App';
import getApolloClient from './getApolloClient';

const render = (manifest) => (req, res) => {
  const context = {};

  // Get a new instance of Apollo client on each request
  const client = getApolloClient();

  const jsx = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );

  const helmet = Helmet.renderStatic();

  // Generate script tags
  const scripts = manifest.client ? `
      <script src=${manifest.client['runtime~main.js']}></script>  
      <script src=${manifest.client['vendors.js']}></script>  
      <script src=${manifest.client['main.js']}></script>`
    : `<script src="/main.js"></script>`;

  // Generate CSS Link
  const css = `<link rel="stylesheet" href="${manifest.client ? manifest.client['main.css'] : ''}" />`;

  renderToStringWithData(jsx)
    .then((content) => {
      const initialState = client.extract();

      if (context.status) {
        res.status(context.status);
      }

      if (context.url) {
        return res.redirect(301, context.url);
      }

      res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                  
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
      
          <link rel="manifest" href="/manifest.json">
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ed732c">
          <!--<link rel="shortcut icon" href="/favicon.ico">-->

          ${css}
          <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,500,600" rel="stylesheet">
      
          ${helmet.title.toString()}
        </head>
      
        <body>
          <div id="root">${content}</div>
          
        <script>
          window.__APOLLO_STATE__ = ${JSON.stringify(initialState).replace(/</g, '\\u003c')};
        </script>
        ${scripts}
        </body>
      </html>
    `);
    })
    .catch((e) => {
      console.error('RENDERING ERROR:', e); // eslint-disable-line no-console
      res.status(500);
      res.end(
        `Something went wrong on the server. Please submit an issue to https://github.com/tigranpetrossian/hnpwa with the following error text:\n\n${
          e
        }`
      );
    });
};

export default render;
