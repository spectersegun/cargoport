import React from 'react';
import AdminDashWrapper from '../components/AdminDashWrapper';
import AdminServiceProviderOrder from '../components/AdminServiceProviderOrder';

export default function adminserviceproviderorder() {
  return (
    <>
      <AdminDashWrapper tab={3} h3="Logigrains Shipments - 40">
        <AdminServiceProviderOrder />
      </AdminDashWrapper>
    </>
  );
}
