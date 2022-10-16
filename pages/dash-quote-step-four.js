import React from 'react';
import DashWrapper from '../components/DashWrapper';
import QuoteStepFour from '../components/QuoteStepFour';

export default function dashquotestepfour() {
  return (
    <div>
      <DashWrapper h3="Quotes">
        <div className="quote-innner ">
          <div className="container">
            <QuoteStepFour dash={false} />
          </div>
        </div>
      </DashWrapper>
    </div>
  );
}
