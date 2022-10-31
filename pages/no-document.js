import React from 'react';
import DashWrapper from '../components/DashWrapper';
import EmptyPage from '../components/EmptyPage';

export default function nodocument() {
  return (
    <div>
      <DashWrapper h3="Quotes">
        <EmptyPage
          h4="No Documents Here"
          h5="You currently have no document uploaded. All your documents uploaded will appear here."
          icon={1}
        />
      </DashWrapper>
    </div>
  );
}
