import React, { Fragment } from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Form, Input, Title, Error } from './styles';
import { SubmitButton } from '../SubmitButton';

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <Fragment>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit} disabled={disabled} >
        <Input placeholder="Email" {...email} disabled={disabled} />
        <Input type="password" placeholder="Password" {...password} disabled={disabled} />
        <SubmitButton disabled={disabled} >{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  )

}