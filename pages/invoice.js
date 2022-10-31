import React from 'react';
import DashWrapper from '../components/DashWrapper';
import Invoice from '../components/Invoice';

export default function invoice() {
  return (
    <div>
      <DashWrapper tab="2" h3="Invoice">
        <Invoice />
      </DashWrapper>
    </div>
  );
}
