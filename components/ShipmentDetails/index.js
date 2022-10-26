import Link from 'next/link';
import React from 'react';
import BookingConfirmed from '../Vectors/BookingConfirmed';
import InTransit from '../Vectors/InTransit';
import Locations from '../Vectors/Locations';
import ShipmentTrendUp from '../Vectors/ShipmentTrendUp';

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
            <div className="shipments-details-card">
              <h4 className="text800">Shipment Type &#38; Location</h4>
              <div className="d-flex flex-column mx-0">
                <div>
                  <h6>SHIPMENT TYPE:</h6>
                  <h5 className="d-flex align-items-center text600">
                    <ShipmentTrendUp /> Export
                  </h5>
                </div>
                <div>
                  <h6>ORIGIN:</h6>
                  <h5 className="d-flex align-items-center">
                    <Locations />
                    Berger Bus stop, Ojodu Berger
                  </h5>
                </div>
                <div>
                  <h6>DESTINATION:</h6>
                  <h5 className="d-flex align-items-center">
                    <Locations color="#307460" />
                    Abu Dhabi (United Arab Emirates)
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="shipments-details-card">
              <h4 className="text800">Service Providers</h4>
              <div className="d-flex mx-0 flex-lg-row flex-column">
                <div className="col-lg-5">
                  <div>
                    <h6>Custom Brokage</h6>
                    <h5>Logigrains </h5>
                  </div>
                  <div>
                    <h6>Ocean Freight:</h6>
                    <h5>MAERSK</h5>
                  </div>
                  <div>
                    <h6>Inland Logistics:</h6>
                    <h5>Cargoport</h5>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div>
                    <h6>Warehousing</h6>
                    <h5>Cargoport</h5>
                  </div>
                  <div>
                    <h6>Insurance</h6>
                    <h5>Zenith Insurance</h5>
                  </div>
                  <div>
                    <h6>Trade Finance</h6>
                    <h5>Cargoport</h5>
                  </div>
                </div>
              </div>
              <h6></h6>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="shipments-details-card">
              <h4 className="text800">Cargo Details</h4>
              <div className="d-flex flex-column">
                <div>
                  <h6>NO OF CONTAINERS:</h6>
                  <h5>2</h5>
                </div>
                <div>
                  <h6>SIZE OF CONTAINERS:</h6>
                  <h5>40 FEET</h5>
                </div>
                <div>
                  <h6>SIZE OF CONTAINERS:</h6>
                  <h5>40 FEET</h5>
                </div>
                <div>
                  <h6>GOODS TYPE:</h6>
                  <h5>Solid Minerals</h5>
                </div>
                <div>
                  <h6>TOTAL VALUE OF GOODS:</h6>
                  <h5>N 5,000,000</h5>
                </div>
                <div>
                  <h6>CARGO DESCRIPTION:</h6>
                  <h5>A big cargo containing raw materials</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="shipments-details-card">
              <h4 className="text800">Additional Details</h4>
              <div className="d-flex mx-0 flex-lg-row flex-column">
                <div className="col-lg-6">
                  <div>
                    <h6>WAREHOUSING: </h6>
                    <h5>NO</h5>
                  </div>
                  <div>
                    <h6>DURATION (WEEKS):</h6>
                    <h5>4</h5>
                  </div>
                  <div>
                    <h6>CARGO PICK-UP DATE:</h6>
                    <h5>AUGUST 18, 2022</h5>
                  </div>
                  <div>
                    <h6>INSURANCE:</h6>
                    <h5>NO</h5>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div>
                    <h6>TOTAL AMOUNT</h6>
                    <h5>N 5,000,000.00</h5>
                  </div>
                  <div>
                    <h6>TRADE FINANCE</h6>
                    <h5>YES</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
