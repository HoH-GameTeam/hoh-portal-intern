import { createClient } from 'graphql-ws';
import jwtDecode from 'jwt-decode';

import { ApolloClient, ApolloLink, InMemoryCache, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { createUploadLink } from 'apollo-upload-client';

import { clearLocalStorage, getLocalStorage } from '../auth/utils';
import { GRAPHQL_API_URI, GRAPHQL_SUBSCRIPTIONS_URI } from '../constants/api';
import { ACCESS_TOKEN } from '../constants/localStorage';

const httpLink = createUploadLink({
  uri: GRAPHQL_API_URI,
  credentials: 'same-origin',
});

const wsLink: any = () => {
  const token = getLocalStorage(ACCESS_TOKEN);
  return new GraphQLWsLink(
    createClient({
      url: `${GRAPHQL_SUBSCRIPTIONS_URI}?authToken=${token}`,
      connectionParams: {
        authToken: token,
      },
    }),
  );
};

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink(),
  httpLink,
);

// const httpLink = createHttpLink({
//   uri: GRAPHQL_API_URI,
//   credentials: 'same-origin',
// });

const errorLink = onError(({ graphQLErrors, networkError }: any) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  // if (networkError) console.log(`[Network error]: ${networkError}`);
  if (networkError) {
    console.log(`[Network error]: ${JSON.stringify(networkError)}`);
    const { statusCode } = networkError;
    if (statusCode === 401) {
      // Token invalid or expired
      clearLocalStorage();
    }
  }
});

const authLink = setContext((_, { headers }) => {
  const token = getLocalStorage(ACCESS_TOKEN);
  if (token) {
    const decodedToken: any = jwtDecode(token);
    if (decodedToken) {
      const { exp } = decodedToken;
      const noww = Math.floor(Date.now() / 1000);
      if (noww > exp) {
        console.log('Outttttttttttttttttttttttttttttttttttttttttttttttttttt');
        clearLocalStorage();
      }
    }
  }

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const link = ApolloLink.from([errorLink, authLink.concat(splitLink)]);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
