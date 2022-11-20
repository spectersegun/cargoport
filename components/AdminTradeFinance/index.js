import React from 'react';
import AdminQuoteTable from '../AdminQuoteTable';
import DashApprovedAlert from '../DashApprovedAlert';
import DashboardCards from '../DashboardCards';
import Grap1 from '../Graph1';
import NamingTop from '../NamingTop';
import { Tabs } from 'antd';
import AdminTradeTable from '../Tables/AdminTradeTable';
import AdminDashboardTradeCard from '../AdminDashboardTradeCard';

export default function AdminTradeFinance() {
  return (
    <section className="dash-home client-bg">
      <div className="container-fluid">
        {/* <DashboardCards admin={true} /> */}
        <AdminDashboardTradeCard />

        <div className="row tabs-wrapping">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Ongoing Shipments" key="item-1">
              <AdminTradeTable />
            </Tabs.TabPane>
            <Tabs.TabPane tab="All Shipments" key="item-2">
              <AdminTradeTable />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
