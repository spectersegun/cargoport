import Link from 'next/link';
import React from 'react';
import QuoteIcon from '../Vectors/QuoteIcon';

export default function SummaryDetailsQuote({ status }) {
  return (
    <div className={`shipments-details-card summary-details-quote ${status}`}>
      <h4 className="text800">Quote</h4>
      <div className="d-flex flex-column align-items-center">
        <div>
          <QuoteIcon />
        </div>

        {status == 'approved' ? (
          <p className="ourfont14">
            Your quote has been successfully approved{' '}
          </p>
        ) : (
          <p className="ourfont14">Your quote is awaiting admin approval</p>
        )}
        <Link href="/quotation">
          <button className="our-btn">View Quotation</button>
        </Link>
      </div>
      <h6></h6>
    </div>
  );
}
