import React from 'react';
import QuoteStepThree from '../components/QuoteStepThree';
import QuoteWrapper from '../components/QuoteWrapper';

export default function quotestepthree() {
  return (
    <div>
      <QuoteWrapper>
        <QuoteStepThree dash={true} />
      </QuoteWrapper>
    </div>
  );
}
