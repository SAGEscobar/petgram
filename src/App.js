import React, { useContext } from 'react';

import { Logo } from './components/Logo/index';
import { GlobalStyles } from './styles/GlobalStyles'
import { Home } from './pages/Home';
import { Redirect, Router } from '@reach/router';
import { Detail } from './pages/Detail';
import { NavBar } from './components/NavBar';
import { User } from './pages/User';
import { Favs } from './pages/Favs';
import { NotRegisterUser } from './pages/NotRegisterUser';
import { NotFound } from './pages/NotFound';
import { Context } from './Context';

export const App = () => {
  const { isAuth } = useContext(Context);
  
  return (
    <div>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisterUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to="/login" />}
        {!isAuth && <Redirect from='/user' to="/login" />}
        {isAuth && <Redirect from='/login' to="/" />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </div>
  )
}
