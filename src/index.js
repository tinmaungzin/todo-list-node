import { ApolloServer } from 'apollo-server';
import typeDefs from './graphql/schema.js';
import resolvers from './graphql/resolvers.js';
// import client from '../db/db.js';

const server = new ApolloServer({typeDefs, resolvers, csrfPrevention: true,})

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`)
})