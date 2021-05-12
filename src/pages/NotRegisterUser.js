import React, { Fragment, useContext } from 'react';
import { Context } from '../Context';
import { UserForm } from '../components/UserForm';
import { RegisterMutation } from '../containers/RegisterMutation';
import { LoginMutation } from '../containers/LoginMutation';


export const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <Fragment>
      <RegisterMutation>
        {
          (register, { loading, data, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password };
              const variables = { input };
              register({ variables })
                .then(({ data }) => {
                  const { signup } = data;
                  activateAuth(signup)
                })
                .catch(err => console.log("Error :c"))
            }

            const errorMsg = error && 'El correo no es valido, o ya existe';

            return (<UserForm
              onSubmit={onSubmit}
              title="Registrarse"
              error={errorMsg}
              disabled={loading}
            />)
          }
        }
      </RegisterMutation>
      <LoginMutation>
        {
          (login, { loading, error, data }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password };
              const variables = { input };
              login({ variables })
                .then(({ data }) => {
                  const { login } = data
                  activateAuth(login)
                })
                .catch(err => console.log("eror :c"));
            }

            const errorMsg = error && "Email o contraseña no validos";

            return (<UserForm
              title="Login"
              onSubmit={onSubmit}
              disabled={loading}
              error={errorMsg}
            />)
          }
        }
      </LoginMutation>
    </Fragment>
  )
}