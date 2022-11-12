import React from 'react';
import DashWrapper from '../components/DashWrapper';
import ShipmentDetails from '../components/ShipmentDetails';

export default function shipmentdetails() {
  return (
    <div>
      <DashWrapper tab="3" h3="Shipment Details">
        <ShipmentDetails />
      </DashWrapper>
    </div>
  );
}
