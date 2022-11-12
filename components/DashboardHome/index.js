import React from 'react';
import DashApprovedAlert from '../DashApprovedAlert';
import DashboardCards from '../DashboardCards';
import Grap1 from '../Graph1';
import NamingTop from '../NamingTop';

export default function DashboardHome({ approved }) {
  return (
    <section className="dash-home client-bg">
      <div className="container-fluid">
        <NamingTop
          h4="Welcome Dammy,"
          p="Would you like to start a shipment today?"
          butt="Start new shipment"
          hrefs={'quote-step-one'}
        />

        {approved && <DashApprovedAlert />}

        <DashboardCards />

        <Grap1 />
      </div>
    </section>
  );
}
