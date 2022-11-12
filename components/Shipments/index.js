import Link from 'next/link';
import React from 'react';
import TradeCard from '../TradeCard';

export default function Shipments() {
  return (
    <section className="shipments-page">
      <div className="container-fluid">
        <div className="row justify-content-between top-bar-space">
          <h4 className="subHeader subHeader-2 col-auto ">
            Total Shipments - 10
          </h4>
          <div className="col-auto ">
            <Link href={'quote-step-one'}>
              <button className="our-btn">Start new shipment</button>
            </Link>
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
