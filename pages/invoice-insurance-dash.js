import React from 'react';
import DashWrapper from '../components/DashWrapper';
import Invoice from '../components/Invoice';

export default function invoiceinsurance() {
  return (
    <div>
      <DashWrapper tab="1" h3="Invoice">
        <Invoice insurance={true} />
      </DashWrapper>
    </div>
  );
}
