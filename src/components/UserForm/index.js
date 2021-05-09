import React, { useState } from 'react';

export const UserForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (<form onSubmit={onSubmit}>
    <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
    <input type="submit" value3wiu=">Iniciar secion :V" />
  </form>)
}