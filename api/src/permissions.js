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

const isAdmin = rule()(async (parent, args, ctx, info) => {
  console.log(ctx)
  return checkPermission(ctx.user, 'admin:all')
})
// export default shield({
//       Query: {
//         "*": isAdmin,
//       },
//     }, isAdmin)

export default shield({
  Query: {
    filmCount: isAdmin,
  },
})
