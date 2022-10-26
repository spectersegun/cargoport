import React from 'react';
import DashWrapper from '../components/DashWrapper';
import TradeFinance from '../components/TradeFinance';

export default function tradefinance() {
  return (
    <div>
      <DashWrapper h3="Trade Finance " tab="4">
        <TradeFinance />
      </DashWrapper>
    </div>
  );
}
