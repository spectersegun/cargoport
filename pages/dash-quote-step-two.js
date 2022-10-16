import React from 'react';
import DashWrapper from '../components/DashWrapper';
import QuoteStepTwo from '../components/QuoteStepTwo';

export default function dashquotesteptwo() {
  return (
    <div>
      <DashWrapper h3="Quotes">
        <div className="quote-innner ">
          <div className="container">
            <QuoteStepTwo dash={true} />
          </div>
        </div>
      </DashWrapper>
    </div>
  );
}
