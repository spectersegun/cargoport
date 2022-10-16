import React from 'react';
import DashNoQuote from '../components/DashNoQuote';
import DashWrapper from '../components/DashWrapper';

export default function dashquote() {
  return (
    <div>
      <DashWrapper h3="Quotes">
        <DashNoQuote />
      </DashWrapper>
    </div>
  );
}
