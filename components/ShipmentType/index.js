import React from 'react';
import Locations from '../Vectors/Locations';
import ShipmentTrendUp from '../Vectors/ShipmentTrendUp';

export default function ShipmentType() {
  return (
    <div className="shipments-details-card shipment-type">
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
  );
}
