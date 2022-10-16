import React from 'react';
import DashWrapper from '../components/DashWrapper';
import QuoteFinalStep from '../components/QuoteFinalStep';

export default function dashquotefinal() {
  return (
    <div>
      <DashWrapper h3="Quotes">
        <div className="quote-innner ">
          <div className="container">
            <QuoteFinalStep />
          </div>
        </div>
      </DashWrapper>
    </div>
  );
}
