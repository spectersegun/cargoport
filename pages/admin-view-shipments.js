import React from 'react';
import AdminDashWrapper from '../components/AdminDashWrapper';
import AdminViewShipments from '../components/AdminViewShipments';

export default function adminshipments() {
  return (
    <>
      <AdminDashWrapper tab={1} h3="Atanda Damilare">
        <AdminViewShipments />
      </AdminDashWrapper>
    </>
  );
}
