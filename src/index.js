import React from 'react';
import ReactDom from 'react-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { App } from './App';
import Context from './Context';

const client = new ApolloClient({
  uri: "https://petgram-server-zag.vercel.app/graphql",
  cache: new InMemoryCache()
})

const container = document.getElementById('app')

ReactDom.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  container
)
