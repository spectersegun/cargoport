import React from 'react';
import AdditionalDetails from '../AdditionalDetails';
import CargoDetails from '../CargoDetails';
import ShipmentType from '../ShipmentType';
import SummaryDetailsQuote from '../SummaryDetailsQuote';

export default function QuoteSummary({ status }) {
  return (
    <section className="quote-summary-page client-bg">
      <div className="container-fluid">
        <div className="row top-bar-space align-items-end">
          <div className="col d-flex  justify-content-md-start justify-content-between ">
            <h4 className="subHeader">Shipment ID: 12345678</h4>
            {status == 'approved' ? (
              <h5 className="status">
                Status: <span className="approved">• Approved</span>
              </h5>
            ) : (
              <h5 className="status">
                Status: <span className="preparing">• Preparing</span>
              </h5>
            )}
          </div>
          <div className="col-auto d-none d-md-block">
            <button className="our-btn">Go Back</button>
          </div>
        </div>
        <div className="container-fluid mt-4 pt-3">
          <div className="row shipments-details-wrapper">
            <div className="col-lg-6">
              <ShipmentType />
            </div>
            <div className="col-lg-6">
              {/* <ServiceProvider /> */}
              <SummaryDetailsQuote status={status} />
            </div>
            <div className="col-lg-6">
              <CargoDetails />
            </div>
            <div className="col-lg-6">
              <AdditionalDetails />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
