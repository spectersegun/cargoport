import React from 'react';
import AdminDashWrapper from '../components/AdminDashWrapper';
import AdminShipmentTimeline from '../components/AdminShipmentTimeline';

export default function adminviewtimelinesecond() {
  return (
    <>
      <AdminDashWrapper tab={3} h3="Shipment Details">
        <AdminShipmentTimeline shippingDetails={false} second={true} />
      </AdminDashWrapper>
    </>
  );
}
