import Link from 'next/link';
import React from 'react';

export default function UpdateShipmentStatus({ onOk }) {
  const onFinish = values => {
    // console.log('Success:', values);
    onOk();
    console.log('onGod');
  };

  return (
    <div className="update-shipment-status">
      <h6>Current Shipment Timeline Status:</h6>
      <h5></h5>
      <div className="row justify-content-center">
        <div className="col-auto">
          <label for="selection" className="d-block">
            Enter New Shipment Status:
          </label>
          <select class="custom-select" id="selection">
            <option selected className="place">
              Select the new shipmnent status here
            </option>
            <option value="1">approved</option>
            <option value="2">denied</option>
            <option value="3">pending</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-auto">
          <button className="our-btn" onClick={onFinish}>
            Confirm Shipment Status
          </button>
        </div>
      </div>
    </div>
  );
}
