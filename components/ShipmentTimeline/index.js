import React from 'react';
import ShippingDetails from '../ShippingDetails';
import Right from '../Vectors/Right';

export default function ShipmentTimeline() {
  return (
    <section className="shipment-timeline">
      <div className="container-fluid">
        <div className="row top-bar-space">
          <div className="col-lg-7">
            <div
              className="d-flex justify-content-between"
              style={{ flexWrap: 'wrap' }}
            >
              <h4 className="subHeader">Shipment Timeline View</h4>
              <button className="our-btn">View Route Map</button>
            </div>
            <div className="shipment-view">
              <div className="d-flex">
                <div className="col-auto icon-wrapper">
                  <Right />
                </div>
                <div className="col">
                  <h4>CGI</h4>
                  <h5>Container arrival at first POL (Gate in)</h5>
                  <div
                    className="d-flex justify-content-between "
                    style={{ flexWrap: 'wrap' }}
                  >
                    <div className="col-lg-auto col-6">
                      <h6>Status</h6>
                      <p>Gate in</p>
                    </div>
                    <div className="col-lg-auto col-6">
                      <h6>Location</h6>
                      <p>Apapa Lagos State Nigeria</p>
                    </div>
                    <div className="col-lg-auto col-6"></div>
                    <div className="col-lg-auto col-6">
                      <h6>Date</h6>
                      <p>2022-08-26 </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="col-auto icon-wrapper">
                  <Right />
                </div>
                <div className="col">
                  <h4>CLL</h4>
                  <h5>Container arrival at first POL</h5>
                  <div
                    className="d-flex justify-content-between "
                    style={{ flexWrap: 'wrap' }}
                  >
                    <div className="col-lg-auto col-6">
                      <h6>Status</h6>
                      <p>Load</p>
                    </div>
                    <div className="col-lg-auto col-6">
                      <h6>Location</h6>
                      <p>Apapa Lagos State Nigeria</p>
                    </div>
                    <div className="col-lg-auto col-6">
                      <h6>Vessel Number</h6>
                      <p>MAERSK CHENNAI, SG </p>
                    </div>
                    <div className="col-lg-auto col-6">
                      <h6>Date</h6>
                      <p>2022-08-26 </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="col-auto icon-wrapper">
                  <Right />
                </div>
                <div className="col">
                  <h4>CDT</h4>
                  <h5>Container discharge at T/S port (Transhipment)</h5>
                  <div
                    className="d-flex justify-content-between "
                    style={{ flexWrap: 'wrap' }}
                  >
                    <div className="col-lg-auto col-6">
                      <h6>Status</h6>
                      <p>Discharge</p>
                    </div>
                    <div className="col-lg-auto col-6">
                      <h6>Location</h6>
                      <p>Algeciras Andulasia, Spain</p>
                    </div>
                    <div className="col-lg-auto col-6">
                      <h6>Vessel Number</h6>
                      <p>MAERSK CHENNAI, SG </p>
                    </div>
                    <div className="col-lg-auto col-6">
                      <h6>Date</h6>
                      <p>2022-08-26 </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="col-auto icon-wrapper">
                  <Right />
                </div>
                <div className="col">
                  <h4>CLT</h4>
                  <h5>Container loaded at T/S port (Transhipment)</h5>
                  <div
                    className="d-flex justify-content-between "
                    style={{ flexWrap: 'wrap' }}
                  >
                    <div className="col-lg-auto col-6">
                      <h6>Status</h6>
                      <p>Load</p>
                    </div>
                    <div className="col-lg-auto col-6">
                      <h6>Location</h6>
                      <p>Algeciras Andulasia, Spain</p>
                    </div>
                    <div className="col-lg-auto col-6">
                      <h6>Vessel Number</h6>
                      <p>DELPHIS RIGA, HK </p>
                    </div>
                    <div className="col-lg-auto col-6">
                      <h6>Date</h6>
                      <p>2022-08-26 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <ShippingDetails />
          </div>
        </div>
      </div>
    </section>
  );
}
