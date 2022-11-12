import React from 'react';
import Profile from '../components/Profile';
import AdminDashWrapper from '../components/AdminDashWrapper';

export default function adminsettings() {
  return (
    <div>
      <AdminDashWrapper h3={'Settings'} tab={6}>
        <Profile admin={true} />
      </AdminDashWrapper>
    </div>
  );
}
