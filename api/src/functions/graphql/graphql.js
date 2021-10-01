import { typeDefs } from './graphql-schema'
const { ApolloServer } = require('apollo-server-lambda')
import express from 'express'
import neo4j from 'neo4j-driver'
import { Neo4jGraphQL } from '@neo4j/graphql'
import dotenv from 'dotenv'
var jwt = require('express-jwt')
var jwks = require('jwks-rsa')

const { applyMiddleware, generateMiddlewareFromSchema, middleware } = require('graphql-middleware')
import { and, or, rule, shield } from 'graphql-shield'

function checkPermission(user, permission) {
  if (user && user.permissions) {
    return user.permissions.includes(permission)
  }

  return false
}

const isAuthenticated = rule()((parent, args, { user }) => {
  return user !== null
})

const isAdmin = rule()((parent, args, { user }) => {
  return checkPermission(user, 'admin:all')
})

const permissions = shield({
      Query: {
        "*": isAdmin,
      },
    }, isAdmin)



// https://dev.to/mandiwise/how-to-auth-securing-your-graphql-api-with-confidence-14j

// set environment variables from .env
dotenv.config()

/*
 * Create a Neo4j driver instance to connect to the database
 * using credentials specified as environment variables
 * with fallback to defaults
 */
const driver = neo4j.driver(
  process.env.NEO4J_URI || 'bolt://localhost:7687',
  neo4j.auth.basic(
    process.env.NEO4J_USER || 'neo4j',
    process.env.NEO4J_PASSWORD || 'neo4j'
  )
)

/*
 * Create an executable GraphQL schema object from GraphQL type definitions
 * including autogenerated queries and mutations.
 * Read more in the docs:
 * https://neo4j.com/docs/graphql-manual/current/
 */
const neoSchema = new Neo4jGraphQL({
  typeDefs, permissions,
  config: {
    jwt: {
      secret: process.env.JWT_SECRET,
      rolesPath:
        'https://auth0.radiator.com/claims\\.https://auth0.radiator.com/claims/roles',
    },
  },
  driver,
})

// Specify host, port and path for GraphQL endpoint
const port = process.env.GRAPHQL_SERVER_PORT || 4001
const path = process.env.GRAPHQL_SERVER_PATH || '/graphql'
const host = process.env.GRAPHQL_SERVER_HOST || '0.0.0.0'

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-z-kyb9kj.us.auth0.com/.well-known/jwks.json',
    rolesPath: 'https://auth0.radiator.com/claims\\.https://auth0.radiator.com/claims/roles'
  }),
  audience: 'https://auth0.radiator.com/',
  issuer: 'https://dev-z-kyb9kj.us.auth0.com/',
  algorithms: ['RS256'],
})


const schema = applyMiddleware(neoSchema.schema, permissions)
const server = new ApolloServer({
  typeDefs,
  schema: schema,
  context: ({ event, context, express }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
    expressRequest: express.req,
    user: express.req.user | null
  }),
   introspection: true,
   playground: true,
})

exports.handler = server.createHandler({
  expressAppFromMiddleware(middleware) {
    const app = express();
    app.use('*', jwtCheck)
    app.use(middleware);
    return app;
  }
});


// const { verifyToken } = require('./utils/verifyToken')
// var jwt = require('express-jwt')
// var jwks = require('jwks-rsa')
// // import IsAuthenticatedDirective from "./directives"

// async function startServer() {
//   apolloServer = new ApolloServer({
//     // context: {
//     //   driver,
//     //   driverConfig: { database: process.env.NEO4J_DATABASE || 'neo4j' },
//     // },
//     // context: ({ req }) => ({ req }),
//     schema: neoSchema.schema,
//     context: async ({ event, context }) => {
//       let isAuthenticated = false
//       const user = {}
//       try {
//         const authHeader = event.headers.authorization || ''
//         if (authHeader) {
//           const token = authHeader.split(' ')[1]
//           const payload = await verifyToken(token)
//           isAuthenticated = payload && payload.sub ? true : false
//           user = payload
//         }
//       } catch (error) {
//         console.error(error)
//       }
//       console.log(user);
//       (context.isAuthenticated = true)
//       // return {
//       //   ...req,
//       //   user: user,
//       //   isAuthenticated: true }
//     },
//     introspection: true,
//     playground: true,
//   })
//   await apolloServer.start();
//   apolloServer.applyMiddleware({ app, path });
//   app.listen({ host, port, path }, () => {
//     console.log(`GraphQL server ready at http://${host}:${port}${path}`)
//   })
// }
// startServer();
