import React from 'react';
import Link from 'next/link';

export default function UpdatingTimelineStatus({ onOk }) {
  const onFinish = values => {
    // console.log('Success:', values);
    onOk();
  };
  return (
    <div className="update-shipment-status">
      <h6>Current Shipment Status:</h6>
      <h5>Booking Confirmed</h5>
      <div className="row justify-content-center">
        <div className="col-12 mb-4 pb-lg-1">
          <label htmlFor="selection" className="d-block">
            Select Timeline:
          </label>
          <select className="custom-select" id="selection">
            <option selected className="place">
              Select shipment timeline here
            </option>
            <option value="1">shipment timeline 1</option>
            <option value="2">shipment timeline 2</option>
          </select>
        </div>

        <div className="col-12 mb-4 pb-lg-1">
          <label htmlFor="selection" className="d-block">
            Enter New Shipment Status:
          </label>
          <select className="custom-select" id="selection">
            <option selected className="place">
              Select the new shipmnent status here
            </option>
            <option value="1">approved</option>
            <option value="2">denied</option>
            <option value="3">pending</option>
          </select>
        </div>

        <div className="col-12 mb-4 pb-lg-1">
          <label htmlFor="Location" className="d-block">
            Enter Timeline Location:
          </label>
          <input
            type="text"
            id="Location"
            placeholder="Enter shipment timeline location here"
          />
        </div>

        <div className="col-12">
          <label htmlFor="vessel" className="d-block">
            Enter vessel number here
          </label>
          <input
            type="text"
            id="vessel"
            placeholder="Enter shipment timeline location here"
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-auto">
          <Link href="/admin-view-timeline">
            <button className="our-btn" onClick={onFinish}>
              Confirm Shipment Status
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
