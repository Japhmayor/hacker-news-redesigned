import React from 'react';
import { renderToString } from 'react-dom/server';
import fetch from 'node-fetch';
import { ApolloProvider, getDataFromTree, renderToStringWithData } from 'react-apollo';
import { StaticRouter } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import App from '../src/App';

const render = ({ clientStats }) => (req, res) => {
  const client = new ApolloClient({
    ssrMode: true,
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.map(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
          );
        }
        if (networkError) {
          console.log(`[Network error]: ${networkError}`);
        }
      }),
      new HttpLink({
        uri: 'http://localhost:4000/graphql',
        credentials: 'same-origin',
        fetch,
      }),
    ]),

    cache: new InMemoryCache(),
  });

  const context = {
    splitPoints: [],
  };

  const jsx = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <App/>
      </StaticRouter>
    </ApolloProvider>
  );

  if (context.url) {
    return res.redirect(301, context.url);
  }

  renderToStringWithData(jsx)
    .then((content) => {
      const initialState = client.extract();

      res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      
          <link rel="manifest" href="/manifest.json">
          <link rel="stylesheet" href="/main.css">
          
          <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,500,600" rel="stylesheet">
      
          <title>React App</title>
        </head>
      
        <body>
          <div id="root">${content}</div>
          
        <script>
          window.splitPoints = ${JSON.stringify(context.splitPoints)};
          window.__APOLLO_STATE__ = ${JSON.stringify(initialState)
        .replace(/</g, '\\u003c')};
        </script>
        <script src="/main.js"></script>
        </body>
      </html>
  `);
    });
};

export default render;
