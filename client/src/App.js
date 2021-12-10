import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import LandingPage from './pages/LandingPage';
import Nav from './components/Nav';
import login from './pages/login'

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
          {/* <StoreProvider> */}
            <Nav />
            <Routes>
              <Route exact path='/' component={LandingPage} />
              {/* <Route exact path='/login' component={Login} />
              <Route exact path='/logout' component={Logout} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/jobs' component={Jobs} />
              <Route exact path='/breakRoom' component={breakRoom} />
              <Route component={NoMatch} /> */}
            </Routes>
          {/* </StoreProvider> */}
        </div>
      </Router>
    </ApolloProvider>
    );
}

export default App;