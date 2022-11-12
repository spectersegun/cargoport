import React from 'react';
import DashboardHome from '../components/DashboardHome';
import DashWrapper from '../components/DashWrapper';

export default function home() {
  return (
    <div>
      <DashWrapper tab="1" h3="Dashboard">
        <DashboardHome />
      </DashWrapper>
    </div>
  );
}
