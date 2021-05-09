import React, { Fragment } from 'react';

import { Logo } from './components/Logo/index';
import { GlobalStyles } from './styles/GlobalStyles'
import { Home } from './pages/Home';
import { Router } from '@reach/router';
import { Detail } from './pages/Detail';
import { NavBar } from './components/NavBar';
import { User } from './pages/User';
import { Favs } from './pages/Favs';
import { NotRegisterUser } from './pages/NotRegisterUser';
import { NotRegisterFavs } from './pages/NotRegisterFavs';
import Context from './Context';

const UserLogged = ({ children }) => {
  return children({ isAuth: false });
}

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailID = urlParams.get('detail');
  console.log(detailID);
  return (
    <div>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <Context.Consumer>
        {({ isAuth }) => (
          isAuth ?
            <Router>
              <Favs path='/favs' />
              <User path='/user' />
            </Router>
            :
            <Router>
              <NotRegisterFavs path='/favs' />
              <NotRegisterUser path='/user' />
            </Router>
        )
        }
      </Context.Consumer>
      <NavBar />
    </div>
  )
}
