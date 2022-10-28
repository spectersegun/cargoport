import React from 'react';

export default function ServiceProvider() {
  return (
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
  );
}
