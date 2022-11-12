import React from 'react';
import AdminDashWrapper from '../components/AdminDashWrapper';
import EditProfile from '../components/EditProfile';

export default function admineditprofile() {
  return (
    <div>
      <AdminDashWrapper h3="Settings - Edit Profile" tab={6}>
        <EditProfile />
      </AdminDashWrapper>
    </div>
  );
}
