import React from 'react';
import QuoteSubmitted from '../components/QuoteSubmitted';
import QuoteWrapper from '../components/QuoteWrapper';

export default function quotesubmitted() {
  return (
    <div>
      <QuoteWrapper>
        <QuoteSubmitted />
      </QuoteWrapper>
    </div>
  );
}
