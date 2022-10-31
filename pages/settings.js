import React from 'react';
import DashWrapper from '../components/DashWrapper';
import Profile from '../components/Profile';

export default function profile() {
  return (
    <div>
      <DashWrapper h3="Settings" tab={6}>
        <Profile />
      </DashWrapper>
    </div>
  );
}
