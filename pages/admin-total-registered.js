import React from 'react';
import AdminDashWrapper from '../components/AdminDashWrapper';
import AdminTotalRegistered from '../components/AdminTotalRegistered';

export default function admintotalregistered() {
  return (
    <div>
      <AdminDashWrapper tab={1} h3="Dashboard">
        <AdminTotalRegistered />
      </AdminDashWrapper>
    </div>
  );
}
