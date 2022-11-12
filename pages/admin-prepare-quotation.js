import React from 'react';
import AdminDashWrapper from '../components/AdminDashWrapper';
import PrepareQuotation from '../components/PrepareQuotation';

export default function adminquotation() {
  return (
    <>
      <AdminDashWrapper tab={2} h3="Prepare Quotation">
        <PrepareQuotation />
      </AdminDashWrapper>
    </>
  );
}
