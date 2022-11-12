import React from 'react';
import AdminDashWrapper from '../components/AdminDashWrapper';
import AdminShipment from '../components/AdminShipment';

export default function admindashboardshipments() {
  return (
    <>
      <AdminDashWrapper tab={3}>
        <AdminShipment />
      </AdminDashWrapper>
    </>
  );
}
