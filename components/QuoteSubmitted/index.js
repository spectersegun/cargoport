import Link from 'next/link';
import React from 'react';
import QuoteIcon from '../Vectors/QuoteIcon';

export default function QuoteSubmitted() {
  return (
    <div className="quotes">
      <div className="quote">
        <div className="illustration text-center">
          <QuoteIcon />
        </div>
        <h4 className="mb-3 text800">Quote Submitted</h4>
        <h5>
          Your quote have been submitted and awaiting approval from out admin.
          Kindly Sign In or Create an account to view your quote details and
          finish up with your shipment
        </h5>
        <button className="btn text800">Create an account</button>
        <button className="btn text800 signin">
          <Link href="/login">Sign In</Link>
        </button>
      </div>
    </div>
  );
}
