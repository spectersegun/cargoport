import React from 'react';
import DashWrapper from '../components/DashWrapper';
import Shipments from '../components/Shipments';

export default function shipments() {
  return (
    <div>
      <DashWrapper tab="3" h3="Shipments">
        <Shipments />
      </DashWrapper>
    </div>
  );
}
