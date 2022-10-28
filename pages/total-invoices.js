import React from 'react';
import DashWrapper from '../components/DashWrapper';
import TotalInvoice from '../components/TotalInvoice';

export default function totalinvoices() {
  return (
    <div>
      <DashWrapper tab="1" h3="Invoices">
        <TotalInvoice from={'dashboard'} />
      </DashWrapper>
    </div>
  );
}
