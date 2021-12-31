import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'
import { setContext } from '@apollo/client/link/context'
import ApolloWrapper from './components/ApolloWrapper'
// https://www.youtube.com/watch?v=Ay7-RyX9XPM&list=PL9Hl4pk2FsvUjfSsxLolVToO5t1hwEIKK&index=9&ab_channel=Neo4j

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#222222',
    },
    secondary: {
      main: '#ff5722',
    },
  },
})

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
const audience = process.env.REACT_APP_AUTH0_AUDIENCE

const Main = () => (
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    // audience={audience}
  >
    <ApolloWrapper>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloWrapper>
  </Auth0Provider>
)

ReactDOM.render(<Main />, document.getElementById('root'))
registerServiceWorker()
