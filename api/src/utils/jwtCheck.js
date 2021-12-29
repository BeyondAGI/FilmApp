var jwt = require('express-jwt')
var jwks = require('jwks-rsa')

export var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-z-kyb9kj.us.auth0.com/.well-known/jwks.json',
    rolesPath: 'https://auth0.radiator.com/claims\\.https://auth0.radiator.com/claims/roles',
  }),
  audience: 'https://auth0.radiator.com/',
  issuer: 'https://dev-z-kyb9kj.us.auth0.com/',
  algorithms: ['RS256'],
})
