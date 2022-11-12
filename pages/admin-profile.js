import React from 'react';
import Profile from '../components/Profile';
import AdminDashboardHome from '../components/AdminDashboardHome';

export default function adminprofile() {
  return (
    <div>
      <AdminDashboardHome h3="Settings" tab={1}>
        <Profile admin={true} />
      </AdminDashboardHome>
    </div>
  );
}
