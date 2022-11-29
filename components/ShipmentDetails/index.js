import Link from 'next/link';
import AdditionalDetails from '../AdditionalDetails';
import CargoDetails from '../CargoDetails';
import ServiceProvider from '../ServiceProvider';
import ShipmentType from '../ShipmentType';
import BookingConfirmed from '../Vectors/BookingConfirmed';
import InTransit from '../Vectors/InTransit';
import { Modal } from 'antd';
import React, { useState } from 'react';
import PasswordChange from '../PasswordChange';
import Mappings from '../Mappings';

export default function ShipmentDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      className="shipments-details-page"
      style={{ background: '#FAFBFD' }}
    >
      <div className="container-fluid">
        <div className="row justify-content-between top-bar-space">
          <h4 className="subHeader col-auto mb-2">Shipping ID - 123456789</h4>

          <div className="row col-sm-auto button-links">
            <Link href="/shipment-timeline">
              <button className="our-btn">View Timeline</button>
            </Link>
            <button className="our-btn our-btn-white" onClick={showModal}>
              View Route Map
            </button>
          </div>
        </div>
      </div>
      <div className="shipment-track">
        <div className="d-flex align-items-center">
          <div className="col-auto d-flex align-items-center pe-0">
            <div className="track-wrapper">
              <BookingConfirmed />
            </div>
            <h5 className="ourfont14 text600">Booking Confirmed</h5>
          </div>
          <div className="col line-wrapper"></div>
          <div className="col-auto d-flex align-items-center px-0">
            <div className="track-wrapper">
              <InTransit />
            </div>
            <h5 className="ourfont14 text600">Freight In Transit</h5>
          </div>
          <div className="col line-wrapper"></div>
          <div className="col-auto d-flex align-items-center px-0">
            <div className="track-wrapper">
              <BookingConfirmed color={'#D9D9D9'} />
            </div>
            <h5 className="ourfont14 text600">Destination</h5>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row shipments-details-wrapper">
          <div className="col-lg-6">
            <ShipmentType />
          </div>
          <div className="col-lg-6">
            <ServiceProvider />
          </div>
          <div className="col-lg-6">
            <CargoDetails />
          </div>
          <div className="col-lg-6">
            <AdditionalDetails />
          </div>
        </div>
      </div>
      <Modal
        title="Shipment Tracking"
        open={isModalOpen}
        onCancel={handleCancel}
        width={900}
        className="change-pass"
      >
        <Mappings />
      </Modal>
    </section>
  );
}
