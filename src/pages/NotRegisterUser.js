import { from } from '@apollo/client';
import React from 'react';
import Context from '../Context';
import { UserForm } from '../components/UserForm';

export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => (
        <UserForm onSubmit={activateAuth} />
      )
    }
  </Context.Consumer>
)