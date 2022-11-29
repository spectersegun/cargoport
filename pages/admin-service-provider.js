import React from 'react';
import AdminDashWrapper from '../components/AdminDashWrapper';
import AdminServiceProvider from '../components/AdminServiceProvider';

export default function adminserviceprovider() {
  return (
    <>
      <AdminDashWrapper tab={5} h3="Service Providers">
        <AdminServiceProvider />
      </AdminDashWrapper>
    </>
  );
}
