import React from 'react';
import DashApprovedAlert from '../DashApprovedAlert';
import DashboardCards from '../DashboardCards';
import NamingTop from '../NamingTop';
import AsideQuote from '../Vectors/AsideQuote';

export default function DashboardHome({ approved }) {
  return (
    <section className="dash-home client-bg">
      <div className="container-fluid">
        <NamingTop
          h4="Welcome Dammy,"
          p="Would you like to start a shipment today?"
          butt="Start new shipment"
        />

        {approved && <DashApprovedAlert />}

        <DashboardCards />
      </div>
    </section>
  );
}
