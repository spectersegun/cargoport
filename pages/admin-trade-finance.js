import React from 'react';
import AdminDashWrapper from '../components/AdminDashWrapper';
import AdminTradeFinance from '../components/AdminTradeFinance';

export default function admintradefinance() {
  return (
    <>
      <AdminDashWrapper tab={4} h3="Trade Finance">
        <AdminTradeFinance />
      </AdminDashWrapper>
    </>
  );
}
