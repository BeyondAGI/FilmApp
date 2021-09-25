// import jwt from 'express-jwt'
// import { SchemaDirectiveVisitor } from 'graphql-tools'

// class IsAuthenticatedDirective extends SchemaDirectiveVisitor {
// //   static getDirectiveDeclaration(directiveName, schema) {
// //     return new GraphQLDirective({
// //       name: 'isAuthenticated',
// //       locations: [DirectiveLocation.FIELD_DEFINITION, DirectiveLocation.OBJECT],
// //     })
// //   }

//   // Implementation for @isAuthenticated when used on a field
//   visitFieldDefinition(field) {
//     field.resolve = async function (result, args, context, info) {
//       // Check for existence of auth token in header
//       if (!context) {
//         throw new AuthorizationError({ message: 'No authorization token.' })
//       }
//       const token = context.headers.authorization

//       // verify the token. If not properly signed an error will be thrown
//       try {
//         const id_token = token.replace('Bearer ', '')
//         const decoded = jwt.verify(id_token, process.env.JWT_SECRET, {
//           algorithms: ['RS256'],
//         })
//         return result[field.name]
//       } catch (err) {
//         throw new AuthorizationError({
//           message: 'You are not authorized for this resource.',
//         })
//       }
//     }
//   }
// }
