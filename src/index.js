import React from 'react';
import ReactDom from 'react-dom';
import { ApolloClient, ApolloLink, concat, from, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { onError } from '@apollo/client/link/error'
import { App } from './App';
import Context from './Context';

const uri = 'https://petgram-api-zag.vercel.app/graphql'
const httpLink = new HttpLink({ uri });
const authMiddleWare = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token');
    const authorization = token ? `Bearer ${token}`: '';
    console.log('Ejecutado')
    operation.setContext({
      headers: {
        authorization
      }
    });

    return forward(operation);
})

const logOut = onError(({ networkError }) => {
  if(networkError && (networkError.result.code === 'invalid_token' || networkError.result.code === 'credentials_bad_format')){
    window.sessionStorage.removeItem('token');
    window.location.href = '/';
  }
})

const client = new ApolloClient({
  link: from([logOut.concat(concat(authMiddleWare, httpLink)), httpLink]),
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
