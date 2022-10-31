import React from 'react';
import TradeTrendUp from '../Vectors/TradeTrendUp';
import LocationLine from '../Vectors/LocationLine';
import Locations from '../Vectors/Locations';
import TradeTrendDown from './TradeTrendDown';
import Link from 'next/link';

export default function TradeCard({ completed, trend, shippingType }) {
  return (
    <div className="col-sm-auto col-lg-4">
      <Link href="/shipment-details">
        <div className="trade-card">
          <div className="trade-top">
            <div className="d-flex justify-content-between mb-3">
              <div>
                <h6>Shipping ID</h6>
                <h4 className="text800">1234567890</h4>
              </div>
              <div>
                {trend == 'down' ? <TradeTrendDown /> : <TradeTrendUp />}
              </div>
            </div>
            <div className="d-flex justify-content-between ">
              <div>
                <h6>Shipment Type</h6>
                <h5 className="text600">
                  {shippingType ? shippingType : 'Export'}
                </h5>
              </div>
              <div>
                <span className="badge text800"> Trade Finance</span>
              </div>
            </div>
          </div>
          <div className="locations">
            <div className="d-flex">
              <div className="col-auto origin-icon-wrapper">
                <Locations />
                <LocationLine className="position-absolute" />
              </div>
              <div className="col">
                <h6>Origin</h6>
                <h5 className="text800">Berger Bus stop, Ojodu Berger</h5>
              </div>
            </div>
            <div className="d-flex">
              <div className="col-auto origin-icon-wrapper mb-0">
                <Locations color="#307460" />
              </div>
              <div className="col">
                <h6>Destination</h6>
                <h5 className="text800">Abu Dhabi, United Arab Emirates</h5>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between trade-details">
            <div className="col-auto">
              <h6>Size of containers</h6>
              <h5>2</h5>
            </div>
            <div className="col-auto">
              <h6>No of containers</h6>
              <h5>40 Feet</h5>
            </div>
            <div className="col-auto">
              <h6>Goods Type</h6>
              <h5>Solid Minerals</h5>
            </div>
          </div>
          <div className="d-flex justify-content-between trade-footer align-items-end">
            <div>
              <h6>Amount Paid</h6>
              <p className="text800">N 5,000,000.00</p>
            </div>
            {completed ? <p className="text800 complete">Completed</p> : ''}
          </div>
        </div>
      </Link>
    </div>
  );
}
