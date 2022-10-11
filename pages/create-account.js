import React from 'react';
import CreateAccount from '../components/CreateAccount';
import LoginWrapper from '../components/LoginWrapper';

export default function createaccount() {
  return (
    <div>
      <LoginWrapper>
        <CreateAccount />
      </LoginWrapper>
    </div>
  );
}
