import React from 'react';
import DashboardHome from '../components/DashboardHome';
import DashWrapper from '../components/DashWrapper';

export default function homeapproved() {
  return (
    <div>
      <DashWrapper tab="1" h3="Dashboard">
        <DashboardHome approved={true} />
      </DashWrapper>
    </div>
  );
}
