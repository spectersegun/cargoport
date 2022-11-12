import React from 'react';
import AdminDashWrapper from '../components/AdminDashWrapper';
import AdminOrders from '../components/AdminOrders';

export default function Adminorder() {
  return (
    <>
      <AdminDashWrapper tab={2} h3="Quotes">
        <AdminOrders />
      </AdminDashWrapper>
    </>
  );
}
