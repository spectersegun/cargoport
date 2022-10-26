import React from 'react';
import DashWrapper from '../components/DashWrapper';
import QuoteStepThree from '../components/QuoteStepThree';

export default function dashquotestepthree() {
  return (
    <div>
      <DashWrapper h3="Quotes" tab={2}>
        <div className="quote-innner ">
          <div className="container">
            <QuoteStepThree dash={true} />
          </div>
        </div>
      </DashWrapper>
    </div>
  );
}
