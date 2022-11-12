import React from 'react';
import NamingTop from '../NamingTop';
import TradeCard from '../TradeCard';
import LocationLine from '../Vectors/LocationLine';
import Locations from '../Vectors/Locations';
import Timer from '../Vectors/Timer';
import TradeTrendUp from '../Vectors/TradeTrendUp';

export default function TradeFinance() {
  return (
    <section className="trade-finance">
      <div className="container-fluid">
        <NamingTop
          h4="Hello Dammy,"
          p="Want to learn more about our trade finance?"
          span="See how it works"
        />
        <div className="payment row mx-0">
          <div className="col-md bg-white">
            <div
              className="d-sm-flex justify-content-between align-items-end"
              style={{ flexWrap: 'wrap' }}
            >
              <div>
                <p className="ourfont14">Your Total Outstanding Payment</p>
                <h4 className="text600">N 5,000,000</h4>
              </div>
              <button className="our-btn ">Make Payments Now</button>
            </div>
          </div>
          <div className="col-md bg-white">
            <div
              className="d-flex justify-content-between align-items-center align-items-sm-start"
              style={{ flexWrap: 'wrap' }}
            >
              <div>
                <p className="ourfont14">Deadline To Remaining Payment</p>
                <h4 className="text600">24 days left</h4>
              </div>

              <Timer />
            </div>
          </div>
        </div>
        <div className="row trade-wrapper">
          <h5 className="heading text600">Trade Finance Shipments - 3</h5>
          <TradeCard shippingType={'import'} />
          <TradeCard completed={true} />
          <TradeCard completed={true} />
        </div>
      </div>
    </section>
  );
}
