import React from 'react';
import DashWrapper from '../components/DashWrapper';
import EmptyPage from '../components/EmptyPage';

export default function noshipment() {
  return (
    <div>
      <DashWrapper h3="Quotes">
        <EmptyPage
          h4="No Shipments Yet"
          h5="You currently have no shipments. Get a free quotes by clicking the button below to get started."
          icon={3}
          button="Start New Shipment"
        />
      </DashWrapper>
    </div>
  );
}
