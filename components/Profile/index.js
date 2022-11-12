import Image from 'next/image';
import Link from 'next/link';
import { Modal } from 'antd';
import React, { useState } from 'react';
import PasswordChange from '../PasswordChange';

export default function Profile({ admin }) {
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
    <section className="profile-page">
      <div className="container-fluid">
        <div className="row top-bar justify-content-end top-bar-space">
          <div className="col-auto d-sm-block d-none">
            <button className="our-btn" onClick={() => showModal}>
              Change Password
            </button>
          </div>
        </div>

        <div className="settings-main row">
          <div className="col-sm-auto ">
            <div className="dp-wrapper">
              <Image
                src={'/image/dp.png'}
                alt="dp"
                width={144}
                height={144}
                objectFit="cover"
                quality={100}
                priority={true}
              />
            </div>
          </div>

          <div className="col-auto profile-details">
            <div className="row">
              <div className="col-auto">
                <h6>First Name</h6>
              </div>
              <div className="col-auto">
                <p>Damilare</p>
              </div>
            </div>
            <div className="row">
              <div className="col-auto">
                <h6>Last Name</h6>
              </div>
              <div className="col-auto">
                <p>Atanda</p>
              </div>
            </div>
            <div className="row">
              <div className="col-auto">
                <h6>Company Name</h6>
              </div>
              <div className="col-auto">
                <p>Dammy specter port</p>
              </div>
            </div>
            <div className="row">
              <div className="col-auto">
                <h6>Email (Office Email)</h6>
              </div>
              <div className="col-auto">
                <p>atandadray@gmail.com</p>
              </div>
            </div>
            <div className="row">
              <div className="col-auto">
                <h6>Phone Number</h6>
              </div>
              <div className="col-auto">
                <p>08123456789</p>
              </div>
            </div>

            <div className="row justify-content-start">
              <Link href={admin ? 'admin-edit-profile' : '/edit-profile'}>
                <button className="our-btn col-auto me-3">Edit Profile</button>
              </Link>

              <button
                className="our-btn col-auto d-block d-sm-none"
                style={{
                  background: '#FCFCFC',
                  color: '#214461',
                }}
                onClick={showModal}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Change Password"
        open={isModalOpen}
        onCancel={handleCancel}
        width={900}
        className="change-pass"
      >
        <PasswordChange onOk={handleOk} />
      </Modal>
    </section>
  );
}
