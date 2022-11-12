import React from 'react';
import AdminDashWrapper from '../components/AdminDashWrapper';
import AdminQuoteSummary from '../components/AdminQuoteSummary';

export default function adminconfirmquotation() {
  return (
    <>
      <AdminDashWrapper tab={2} h3="Quote Summary - Shipping ID (12345678)">
        <AdminQuoteSummary from="confirm"></AdminQuoteSummary>
      </AdminDashWrapper>
    </>
  );
}
