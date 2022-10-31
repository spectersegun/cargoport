import React from 'react';

export default function ShippingDetails() {
  return (
    <div className="shipping-details">
      <h4>Shipping Details</h4>
      <div className="top-details">
        <div className="d-flex ">
          <h6 className="col-6">Mode</h6>
          <p className="col-6">: FCL</p>
        </div>
        <div className="d-flex ">
          <h6 className="col-6">Container</h6>
          <p className="col-6">: 3 x 20 containers</p>
        </div>
        <div className="d-flex ">
          <h6 className="col-6">Origin Country</h6>
          <p className="col-6">: Nigeria</p>
        </div>
        <div className="d-flex ">
          <h6 className="col-6">Origin Port</h6>
          <p className="col-6">: NGAPP</p>
        </div>
        <div className="d-flex ">
          <h6 className="col-6">Destination Country</h6>
          <p className="col-6">: Netherland</p>
        </div>
        <div className="d-flex ">
          <h6 className="col-6">Destination Port </h6>
          <p className="col-6">: NLRTM</p>
        </div>
      </div>

      <h4>Service Providers</h4>

      <div className="bottom-details">
        <div className="d-flex ">
          <h6 className="col-6">Custom Brokage</h6>
          <p className="col-6">: Logigrains</p>
        </div>
        <div className="d-flex ">
          <h6 className="col-6">Ocean Freight</h6>
          <p className="col-6">: MAERSK</p>
        </div>
        <div className="d-flex ">
          <h6 className="col-6">Inland Logistics</h6>
          <p className="col-6">: Cargoport.</p>
        </div>
        <div className="d-flex ">
          <h6 className="col-6">Warehousing</h6>
          <p className="col-6">: Cargoport.</p>
        </div>
        <div className="d-flex ">
          <h6 className="col-6">Insurance</h6>
          <p className="col-6">: Zenith Insurance</p>
        </div>
        <div className="d-flex ">
          <h6 className="col-6">Trade Finance </h6>
          <p className="col-6">: Cargoport.</p>
        </div>
      </div>
    </div>
  );
}
