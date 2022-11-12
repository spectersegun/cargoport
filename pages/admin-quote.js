import React from 'react';
import AdminDashWrapper from '../components/AdminDashWrapper';
import AdminQuote from '../components/AdminQuote';

export default function adminquote() {
  return (
    <>
      <AdminDashWrapper tab={2} h3="Quote">
        <AdminQuote />
      </AdminDashWrapper>
    </>
  );
}
