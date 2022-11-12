import React from 'react';
import AdminQuoteTable from '../AdminQuoteTable';
import DashApprovedAlert from '../DashApprovedAlert';
import DashboardCards from '../DashboardCards';
import Grap1 from '../Graph1';
import NamingTop from '../NamingTop';

export default function AdminDashboardHome({ approved, admin }) {
  return (
    <section className="dash-home client-bg">
      <div className="container-fluid">
        <NamingTop h4="Welcome Admin," p="Let’s prepare some quotes today!" />

        {approved && <DashApprovedAlert />}

        <DashboardCards admin={admin} />

        <AdminQuoteTable />
      </div>
    </section>
  );
}
