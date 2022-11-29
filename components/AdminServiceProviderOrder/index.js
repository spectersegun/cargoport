import React from 'react';
import { Input } from 'antd';
import SearchBy from '../../components/Vectors/SearchBy';
import RegisteredMembers from '../Tables/RegisteredMembers';
import { Tabs } from 'antd';
import AdminQuoteTable from '../AdminQuoteTable';

export default function AdminServiceProviderOrder() {
  const { Search } = Input;
  const onSearch = value => console.log(value);

  const suffix = <SearchBy />;

  return (
    <section className="quotes-page documents registered-memebers client-bg">
      <div className="container-fluid">
        <div className="row top-bar-space justify-content-between ">
          <div className="col-auto">
            <button className="our-btn">Go Back</button>
          </div>
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
          <AdminQuoteTable from={'order'} />
        </div>
      </div>
    </section>
  );
}
