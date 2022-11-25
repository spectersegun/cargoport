import React from 'react';
import AdminDashWrapper from '../components/AdminDashWrapper';
import AdminNoServiceProvider from '../components/AdminNoServiceProvider';

export default function noserviceprovider() {
  return (
    <>
      <AdminDashWrapper tab={5} h3="Service Providers">
        <AdminNoServiceProvider />
      </AdminDashWrapper>
    </>
  );
}
