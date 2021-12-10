import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { setContext } from '@apollo/client/link/context';

import LandingPage from './pages/LandingPage';
import Nav from './components/Nav';
import Jobs from './pages/Jobs';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
          <LandingPage />
          <Jobs />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;