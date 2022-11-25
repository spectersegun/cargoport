import Link from 'next/link';
import React from 'react';
import SubHeader from '../QuoteWrapper/SubHeader';
import SearchBy from '../../components/Vectors/SearchBy';
import { Input } from 'antd';
import NoServiceProvider from '../Vectors/NoServiceProvider';

export default function AdminNoServiceProvider() {
  const { Search } = Input;
  const onSearch = value => console.log(value);

  // const suffix = <SearchOutlined />;
  const suffix = <SearchBy />;

  return (
    <section className="no-service-provider">
      <div className="row top-bar-space justify-content-start ">
        <h4 className="subHeader subHeader-2 col-auto me-5 pe-lg-5 mb-3">
          Total Service Providers - 0
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

      <div className="quote-innner ">
        <div className="quotes">
          <div className="quote border-0 pt-0">
            <div className="illustration text-center mt-0">
              <NoServiceProvider className="illustration-svg" />
            </div>
            <SubHeader
              h4={'No Service Providers Yet'}
              h5={
                'There are currently no service providers. Click the button below to start adding service providers'
              }
            />
            <div className="row justify-content-center">
              <div className="col-auto">
                <Link href="/admin-add-service-provider">
                  <button className="our-btn">Add New Service Provider</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
