import React from 'react';
import DashWrapper from '../components/DashWrapper';
import EmptyPage from '../components/EmptyPage';

export default function paymentcomplete() {
  return (
    <div>
      <DashWrapper h3="Quotes">
        <EmptyPage
          h4="Payment Successful"
          h5="Your payment has been successful. Click the button below to view the status of your new shipment. Reach out to us in case of any issues"
          icon={2}
          button="View Shipment Status"
        />
      </DashWrapper>
    </div>
  );
}
