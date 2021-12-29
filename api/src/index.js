import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import dotenv from 'dotenv'
import { jwtCheck } from './utils/jwtCheck'
import permissions from './permissions'
const { applyMiddleware } = require('graphql-middleware')
import { neoSchema } from './neoSchema'
// https://dev.to/mandiwise/how-to-auth-securing-your-graphql-api-with-confidence-14j

// set environment variables from .env
dotenv.config()

// Specify host, port and path for GraphQL endpoint
const port = process.env.GRAPHQL_SERVER_PORT || 4001
const path = process.env.GRAPHQL_SERVER_PATH || '/graphql'
const host = process.env.GRAPHQL_SERVER_HOST || '0.0.0.0'

async function startApolloServer() {
  const app = express()
  // const schemaWithMiddleware = applyMiddleware(neoSchema.schema, permissions)
  const schema = applyMiddleware(neoSchema.schema, permissions)
  // const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema: schema,
    context: ({ req }) => {
      const user = req.user || null
      return { user }
    }, // UPDATED!
    introspection: true,
    playground: true,
  })
  await server.start()

  // Additional middleware can be mounted at this point to run before Apollo.
  app.use('*', jwtCheck) //, requireAuth, checkScope

  // Mount Apollo middleware here.
  server.applyMiddleware({ app, path })
  app.listen({ host, port, path }, () => {
    console.log(`GraphQL server ready at http://${host}:${port}${path}`)
  })
  return { server, app }
}
startApolloServer()
