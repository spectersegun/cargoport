import React from 'react';
import QuoteTable from '../QuoteTable';
import { Input } from 'antd';
import { AudioOutlined, SearchOutlined } from '@ant-design/icons';
import SearchBy from '../../components/Vectors/SearchBy';
import RegisteredMembers from '../Tables/RegisteredMembers';

export default function AdminTotalRegistered() {
  const { Search } = Input;
  const onSearch = value => console.log(value);

  // const suffix = <SearchOutlined />;
  const suffix = <SearchBy />;

  return (
    <section className="quotes-page documents registered-memebers client-bg">
      <div className="container-fluid">
        <div className="row top-bar-space justify-content-between ">
          <h4 className="subHeader subHeader-2 col-auto">
            Total Regitered Members - 1,234,567
          </h4>

          <div className="col-auto search-by">
            <Search
              onSearch={onSearch}
              allowClears
              placeholder="Search by shipment ID"
              prefix={suffix}
            />
          </div>
        </div>
        <div className="row">
          <RegisteredMembers />
        </div>
      </div>
    </section>
  );
}
