import React from 'react';

export default function CargoDetails() {
  return (
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
  );
}
