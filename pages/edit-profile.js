import React from 'react';
import DashWrapper from '../components/DashWrapper';
import EditProfile from '../components/EditProfile';

export default function editprofile() {
  return (
    <div>
      <DashWrapper h3="Settings - Edit Profile" tab={6}>
        <EditProfile />
      </DashWrapper>
    </div>
  );
}
