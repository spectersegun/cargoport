import Link from 'next/link';
import React from 'react';
import AdditionalDetails from '../AdditionalDetails';
import CargoDetails from '../CargoDetails';
import ServiceProvider from '../ServiceProvider';
import ShipmentType from '../ShipmentType';
import BookingConfirmed from '../Vectors/BookingConfirmed';
import InTransit from '../Vectors/InTransit';

export default function ShipmentDetails() {
  return (
    <section
      className="shipments-details-page"
      style={{ background: '#FAFBFD' }}
    >
      <div className="container-fluid">
        <div className="row justify-content-between top-bar-space">
          <h4 className="subHeader col-auto">Shipping ID - 123456789</h4>
          <div className="row col-sm-auto">
            <Link href="/shipment-timeline">
              <button className="our-btn me-sm-3">View Timeline</button>
            </Link>
            <button className="our-btn our-btn-white">View Route Map</button>
          </div>
        </div>
      </div>
      <div className="shipment-track">
        <div className="d-flex align-items-center">
          <div className="col-auto d-flex align-items-center pe-0">
            <div className="track-wrapper">
              <BookingConfirmed />
            </div>
            <h5 className="ourfont14 text600">Booking Confirmed</h5>
          </div>
          <div className="col line-wrapper"></div>
          <div className="col-auto d-flex align-items-center px-0">
            <div className="track-wrapper">
              <InTransit />
            </div>
            <h5 className="ourfont14 text600">Freight In Transit</h5>
          </div>
          <div className="col line-wrapper"></div>
          <div className="col-auto d-flex align-items-center px-0">
            <div className="track-wrapper">
              <BookingConfirmed color={'#D9D9D9'} />
            </div>
            <h5 className="ourfont14 text600">Destination</h5>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row shipments-details-wrapper">
          <div className="col-lg-6">
            <ShipmentType />
          </div>
          <div className="col-lg-6">
            <ServiceProvider />
          </div>
          <div className="col-lg-6">
            <CargoDetails />
          </div>
          <div className="col-lg-6">
            <AdditionalDetails />
          </div>
        </div>
      </div>
    </section>
  );
}
