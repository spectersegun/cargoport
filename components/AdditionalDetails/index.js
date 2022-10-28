import React from 'react';

export default function AdditionalDetails() {
  return (
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
  );
}
