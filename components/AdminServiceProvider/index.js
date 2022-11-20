import React from 'react';
import { Input } from 'antd';
import SearchBy from '../../components/Vectors/SearchBy';
import Link from 'next/link';
import ServiceProviderTable from '../Tables/ServiceProviderTable';

export default function AdminServiceProvider() {
  const { Search } = Input;

  const onSearch = value => console.log(value);

  const suffix = <SearchBy />;

  return (
    <section className="sp-page client-bg document quotes-page">
      <div className="row top-bar-space justify-content-between grid-gap-16">
        <h4 className="subHeader subHeader-2 col-auto  ">
          Total Service Providers - 10
        </h4>

        <div className="col-auto search-by">
          <Search
            onSearch={onSearch}
            allowClears
            placeholder="Search by shipment ID"
            prefix={suffix}
          />
        </div>

        <div className="col-auto">
          <Link href="/admin-add-service-provider">
            <button className="our-btn">Add New Service Provider</button>
          </Link>
        </div>
      </div>
      <div className="">
        <ServiceProviderTable />
      </div>
    </section>
  );
}
