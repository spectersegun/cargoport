import React from 'react';
import { Input } from 'antd';
import SearchBy from '../Vectors/SearchBy';
import TradeCard from '../TradeCard';

export default function AdminViewShipments() {
  const { Search } = Input;
  const onSearch = value => console.log(value);

  // const suffix = <SearchOutlined />;
  const suffix = <SearchBy />;

  return (
    <section className="shipments-page">
      <div className="container-fluid">
        <div className="row justify-content-between top-bar-space">
          <h4 className="subHeader subHeader-2 col-auto ">
            Total Shipments - 10
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
        <div className="row trade-wrapper">
          <TradeCard completed={false} />
          <TradeCard shippingType="Import" trend="down" completed={true} />
          <TradeCard completed={true} trend="down" />
          <TradeCard completed={true} shippingType="Import" trend="down" />
          <TradeCard completed={true} trend="down" />
          <TradeCard completed={true} trend="down" />
        </div>
      </div>
    </section>
  );
}
