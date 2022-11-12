import React from 'react';
import DashWrapper from '../components/DashWrapper';
import QuoteSummary from '../components/QuoteSummary';

export default function quotesummary() {
  return (
    <div>
      <DashWrapper tab="2" h3="Quote Summary - Shipping ID (12345678)">
        <QuoteSummary />
      </DashWrapper>
    </div>
  );
}
