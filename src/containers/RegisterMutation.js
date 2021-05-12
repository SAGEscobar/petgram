import React from 'react';
import { Mutation } from '@apollo/client/react/components';
import { gql } from '@apollo/client';

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup (input: $input)
  }
`;

export const RegisterMutation = ({ children }) => {
  return (
  <Mutation mutation={REGISTER}>
    {children}
  </Mutation>
  )
}