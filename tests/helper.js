import { PrismaClient } from '@prisma/client'
import { ApolloServer } from 'apollo-server';
import resolvers from '../src/graphql/resolvers.js';
import typeDefs from '../src/graphql/schema.js';

const testingServer = new ApolloServer({typeDefs, resolvers, csrfPrevention: true,})


let prisma = new PrismaClient();
export const getConfig = () => {
  let config = {}

  beforeAll(async () => {
    const { url } = await testingServer.listen({ port: 4001 })
    config.url = url
    return config
  })

  afterAll(async () => {
    await testingServer.stop()
    return prisma.$disconnect()
  })

  return config  
}