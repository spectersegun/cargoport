import React from 'react';
import DashWrapper from '../components/DashWrapper';
import Documents from '../components/Documents';

export default function documents() {
  return (
    <div>
      <DashWrapper tab="5" h3="Trade Finance">
        <Documents />
      </DashWrapper>
    </div>
  );
}
