import React from 'react';
import AdminDashWrapper from '../components/AdminDashWrapper';
import AdminShipmentDetails from '../components/AdminShipmentDetails';
import ShipmentDetails from '../components/ShipmentDetails';

export default function adminshipmentdetails() {
  return (
    <>
      <AdminDashWrapper tab={3} h3="Shipment Details">
        <AdminShipmentDetails />
      </AdminDashWrapper>
    </>
  );
}
