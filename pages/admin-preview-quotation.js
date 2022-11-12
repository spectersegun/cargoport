import React from 'react';
import AdminDashWrapper from '../components/AdminDashWrapper';
import PreviewQuotation from '../components/PreviewQuotation';

export default function adminpreviewquotation() {
  return (
    <>
      <AdminDashWrapper tab={2} h3="Preview Quotation">
        <PreviewQuotation />
      </AdminDashWrapper>
    </>
  );
}
