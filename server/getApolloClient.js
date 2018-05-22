import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import fetch from 'node-fetch';

const getApolloClient = () => {
  return new ApolloClient({
    ssrMode: true,
    link: ApolloLink.from([
      // TODO: Errors don't indicate anything in the browser. Fix.
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
};

export default getApolloClient;
