import React from 'react';
import { Input } from 'antd';
import SearchBy from '../../components/Vectors/SearchBy';
import RegisteredMembers from '../Tables/RegisteredMembers';
import { Tabs } from 'antd';
import AdminQuoteTable from '../AdminQuoteTable';

export default function AdminShipment() {
  const { Search } = Input;
  const onSearch = value => console.log(value);

  // const suffix = <SearchOutlined />;
  const suffix = <SearchBy />;

  return (
    <section className="quotes-page documents registered-memebers client-bg">
      <div className="container-fluid">
        <div className="row top-bar-space justify-content-end ">
          <div className="col-auto search-by">
            <Search
              onSearch={onSearch}
              allowClears
              placeholder="Search by shipment ID"
              prefix={suffix}
            />
          </div>
        </div>
        <div className="row tabs-wrapping">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="New Orders" key="item-1">
              <AdminQuoteTable />
            </Tabs.TabPane>
            <Tabs.TabPane tab="All Orders" key="item-2">
              <RegisteredMembers />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
