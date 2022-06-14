import { ApolloServer } from 'apollo-server';
import typeDefs from './graphql/schema.js';
import resolvers from './graphql/resolvers.js';

const server = new ApolloServer({typeDefs, resolvers, csrfPrevention: true,})

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})