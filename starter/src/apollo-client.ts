import { ApolloClient, InMemoryCache } from '@apollo/client';

// Article - Getting Started
// https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
});

export default client;
