import React from 'react';
import Link from 'next/link';
import QuoteIcon from '../Vectors/QuoteIcon';
import QuoteSubmitted from '../QuoteSubmitted';

export default function DashNoQuote() {
  return (
    <div className="quote-innner ">
      <div className="container">
        <QuoteSubmitted
          submitted={false}
          h4="No Quotes Yet"
          h5="You currently have no quotes. Get a free quotes by clicking the button below to get started."
        />
      </div>
    </div>
  );
}
