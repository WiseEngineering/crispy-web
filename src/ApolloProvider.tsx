import React from 'react'

import { ApolloClient } from 'apollo-client'
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
import { ApolloProvider as ReactApolloProvider } from 'react-apollo'
import introspectionQueryResultData from 'utils/fragmentTypes.json'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        )
      if (networkError) console.log(`[Network error]: ${networkError}`)
    }),
    new HttpLink({
      uri: '/crispy-api',
      credentials: 'same-origin',
    }),
  ]),
  cache: new InMemoryCache({ fragmentMatcher }),
})

export const ApolloProvider: React.FC = props => {
  const { children } = props
  return <ReactApolloProvider client={client}>{children}</ReactApolloProvider>
}
