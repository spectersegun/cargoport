import React from 'react';

export default function AdditionalDetailsAdmin() {
  return (
    <div className="shipments-details-card">
      <h4 className="text800">Additional Details</h4>
      <div className="d-flex mx-0 flex-lg-row flex-column">
        <div className="col-12">
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
          <div>
            <h6>TRADE FINANCE</h6>
            <h5>YES</h5>
          </div>
          <div>
            <h6>Office Address:</h6>
            <h5>University Of lagos, Akoka, Yaba</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
