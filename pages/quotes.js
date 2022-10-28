import React from 'react';
import DashWrapper from '../components/DashWrapper';
import Quotes from '../components/Quotes';

export default function quotes() {
  return (
    <div>
      <DashWrapper tab="2" h3="Quotes">
        <Quotes />
      </DashWrapper>
    </div>
  );
}
