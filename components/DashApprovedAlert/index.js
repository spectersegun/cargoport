import Link from 'next/link';
import React from 'react';
import AsideQuote from '../Vectors/AsideQuote';

export default function DashApprovedAlert() {
  return (
    <div className="row approved-alert">
      <div className="col-auto px-0">
        <AsideQuote width={24} height={24} color="second" />
      </div>
      <div className="col d-flex justify-content-between align-items-center flex-wrap row mx-0">
        <div className="col-sm-auto">
          <p className="">
            Your quote with Shipping ID (1234567) has been approved. Kindly
            click the button to proceed with your shipment.
          </p>
        </div>

        <div className="col-sm-auto">
          <Link href="/quote-summary-approved">
            <button className="our-btn">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
