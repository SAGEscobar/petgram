import React, { lazy, Suspense, useContext } from 'react';
import { Logo } from './components/Logo/index';
import { GlobalStyles } from './styles/GlobalStyles'
import { Redirect, Router } from '@reach/router';
import { NavBar } from './components/NavBar';
import { User } from './pages/User';
import { NotFound } from './pages/NotFound';
import {Context} from './Context';

const Favs = lazy(() => import('./pages/Favs'));
const Home = lazy(() => import('./pages/Home'));
const NotRegisterUser = lazy(() => import('./pages/NotRegisterUser'));
const Detail = lazy(() => import('./pages/Detail'))

export const App = () => {
  const { isAuth } = useContext(Context);
  
  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisterUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to="/login" />}
        {!isAuth && <Redirect noThrow from='/user' to="/login" />}
        {isAuth && <Redirect noThrow from='/login' to="/" />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
      </Suspense>
  )
}
