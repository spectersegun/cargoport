import React from 'react';
import DashWrapper from '../components/DashWrapper';
import QuoteStepOne from '../components/QuoteStepOne';

export default function dashquotestepone() {
  return (
    <div>
      <DashWrapper h3="Quotes" tab={2}>
        <div className="quote-innner ">
          <div className="container">
            <QuoteStepOne dash={true} />
          </div>
        </div>
      </DashWrapper>
    </div>
  );
}
