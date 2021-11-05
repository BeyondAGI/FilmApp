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