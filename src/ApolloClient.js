import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { BASE_URL } from './constants';

// A client for browser. For server client see: src/server/getApolloClient.js
const client = new ApolloClient({
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
      /* eslint-disable no-undef */
      uri: process.env.NODE_ENV === 'production' ? `${BASE_URL}:4000/graphql` : 'http://localhost:4000/graphql',
      /* eslint-enable no-undef */
      credentials: 'same-origin',
    }),
  ]),

  cache: new InMemoryCache({
    cacheRedirects: {
      Query: {
        post: (_, args, { getCacheKey }) => getCacheKey({
          __typename: 'Post',
          id: args.id,
        }),
      },
    },
  }).restore(window.__APOLLO_STATE__),
});

export default client;
