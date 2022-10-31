import React from 'react';
import DashWrapper from '../components/DashWrapper';
import Quotation from '../components/Quotation';

export default function quotation() {
  return (
    <div>
      <DashWrapper tab="2" h3="Quotes">
        <Quotation />
      </DashWrapper>
    </div>
  );
}
