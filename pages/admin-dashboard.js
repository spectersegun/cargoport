import React from 'react';
import AdminDashboardHome from '../components/AdminDashboardHome';
import AdminDashWrapper from '../components/AdminDashWrapper';
import { Table } from 'antd';

export default function admindashboard() {
  return (
    <div>
      <AdminDashWrapper tab={1} h3="Dashboard">
        <AdminDashboardHome admin={true} />
      </AdminDashWrapper>
    </div>
  );
}
