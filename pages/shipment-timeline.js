import React from 'react';
import DashWrapper from '../components/DashWrapper';
import ShipmentTimeline from '../components/ShipmentTimeline';

export default function shipmenttimeline() {
  return (
    <div>
      <DashWrapper tab="3" h3="Shipment Details">
        <ShipmentTimeline />
      </DashWrapper>
    </div>
  );
}
