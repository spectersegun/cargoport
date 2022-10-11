import React from 'react';
import Login from '../components/Login';
import LoginWrapper from '../components/LoginWrapper';

export default function login() {
  return (
    <div>
      <LoginWrapper>
        <Login />
      </LoginWrapper>
    </div>
  );
}
