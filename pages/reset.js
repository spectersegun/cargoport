import React from 'react';
import LoginWrapper from '../components/LoginWrapper';
import Reset from '../components/Reset';

export default function reset() {
  return (
    <div>
      <LoginWrapper>
        <Reset />
      </LoginWrapper>
    </div>
  );
}
