import React from 'react';
import { Mutation } from '@apollo/client/react/components';
import { gql } from '@apollo/client';

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login (input: $input)
  }
`;

export const LoginMutation = ({ children }) => (
  <Mutation mutation={LOGIN}>
    {children}
  </Mutation>
) 