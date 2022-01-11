import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider, ApolloLink } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { setContext } from '@apollo/link-context'
import { SentryLink } from 'apollo-link-sentry'
import React from 'react'

// https://www.youtube.com/watch?v=vqHkwTWbaUk&t=4922s&ab_channel=ApolloGraphQL

function ApolloWrapper({ children }) {
  const { isAuthenticated, getAccessTokenSilently, getIdTokenClaims } = useAuth0()
  const [bearerToken, setBearerToken] = useState('')

  useEffect(() => {
    const getToken = async () => {
      const token = isAuthenticated ? await getAccessTokenSilently() : ''
      setBearerToken(token)
    }
    getToken()
  }, [getAccessTokenSilently, isAuthenticated])

  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URI || '/graphql',
  })

  const authLink = setContext(async (_, { headers }) => {
    if (!isAuthenticated) {
      return headers
    }
    const token = await getIdTokenClaims()
    return {
      headers: {
        ...headers,
        // 'Authorization': `Bearer ${bearerToken}`,
        'X-Auth-Token': token ? token.__raw : '',
      },
    }
  })

  // const authLink = setContext((_, { headers, ...rest }) => {
  //     if (!bearerToken) return { headers, ...rest }

  //     return {
  //         ...rest,
  //         headers: {
  //             ...headers,
  //             authorization: `Bearer ${bearerToken}`,
  //             mode: "no-cors",
  //             "Access-Control-Allow-Origin": "*",
  //             'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //             "Access-Control-Allow-Credentials": true,
  //             'Authorization': `Bearer ${bearerToken}`,
  //         },

  //     }
  // })

  const client = new ApolloClient({
    link: ApolloLink.from([new SentryLink({ uri: 'https://nameless-brook-310449.eu-central-1.aws.cloud.dgraph.io/graphql', attachBreadcrumbs: { includeQuery: true, includeVariables: true } }), httpLink]),
    cache: new InMemoryCache(),
    // fetchOptions: {
    //   mode: 'no-cors',
    // },
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloWrapper
