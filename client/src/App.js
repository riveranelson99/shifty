import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import { setContext } from '@apollo/client/link/context';

import LandingPage from './pages/LandingPage';
import Nav from './components/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Jobs from './pages/Jobs';
import Login from './pages/LoginPage';
import SignUp from './pages/SignUpPage';
import Talent from './pages/TalentPage';

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
      {/* < Talent /> */}
      <Router>
        <div>
          {/* <StoreProvider> */}
            <Header />
            {/*             
            < Talent />
             */}
            <Routes>
              <Route exact path='/' element={<LandingPage />} />
              <Route exact path='/jobs' element={<Jobs />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/signup' element={<SignUp />} />
              {/* <Route exact path='/breakRoom' element={<breakRoom />} /> */}
              {/* <Route exact path='/logout' element={<Logout />} /> */}
              {/* <Route exact path='/profile' component={<Profile />} /> */}
            </Routes>
          {/* </StoreProvider> */}
        </div>
      </Router>
      <Footer />
    </ApolloProvider>
  );
}

export default App;