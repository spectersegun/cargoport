import React from 'react';
import LoginWrapper from '../components/LoginWrapper';
import PasswordSetup from '../components/PasswordSetup';

export default function passwordsetup() {
  return (
    <div>
      <LoginWrapper>
        <PasswordSetup />
      </LoginWrapper>
    </div>
  );
}
