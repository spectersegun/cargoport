import React from 'react';
import { Table } from 'antd';
import Link from 'next/link';

export default function RegisteredMembers() {
  const dataSource = [
    {
      key: '1',
      NAME: <span className="name">Atanda Damilare</span>,
      EMAIL: <span className="email">atandadray@gmail.com</span>,
      phoneNumber: <span className="phone_number">+234 8123456790</span>,
      totalShipment: <span className="totalShipment">10</span>,
      buttons: (
        <div className="d-flex buttons">
          <Link href={'/admin-view-shipments'}>
            <button className="our-btn ">View Details </button>
          </Link>

          <Link href={'/admin-settings'}>
            <button className="our-btn our-btn-white">View Profile </button>
          </Link>
        </div>
      ),
    },
    {
      key: '2',
      NAME: <span className="name">Atanda Damilare</span>,
      EMAIL: <span className="email">atandadray@gmail.com</span>,
      phoneNumber: <span className="phone_number">+234 8123456790</span>,
      totalShipment: <span className="totalShipment">10</span>,
      buttons: (
        <div className="d-flex buttons">
          <Link href={'/admin-view-shipments'}>
            <button className="our-btn ">View Details </button>
          </Link>

          <Link href={'/admin-settings'}>
            <button className="our-btn our-btn-white">View Profile </button>
          </Link>
        </div>
      ),
    },
    {
      key: '3',
      NAME: <span className="name">Atanda Damilare</span>,
      EMAIL: <span className="email">atandadray@gmail.com</span>,
      phoneNumber: <span className="phone_number">+234 8123456790</span>,
      totalShipment: <span className="totalShipment">10</span>,
      buttons: (
        <div className="d-flex buttons">
          <Link href={'/admin-view-shipments'}>
            <button className="our-btn ">View Details </button>
          </Link>

          <Link href={'/admin-settings'}>
            <button className="our-btn our-btn-white">View Profile </button>
          </Link>
        </div>
      ),
    },
    {
      key: '4',
      NAME: <span className="name">Atanda Damilare</span>,
      EMAIL: <span className="email">atandadray@gmail.com</span>,
      phoneNumber: <span className="phone_number">+234 8123456790</span>,
      totalShipment: <span className="totalShipment">10</span>,
      buttons: (
        <div className="d-flex buttons">
          <Link href={'/admin-view-shipments'}>
            <button className="our-btn ">View Details </button>
          </Link>

          <Link href={'/admin-settings'}>
            <button className="our-btn our-btn-white">View Profile </button>
          </Link>
        </div>
      ),
    },
    {
      key: '5',
      NAME: <span className="name">Atanda Damilare</span>,
      EMAIL: <span className="email">atandadray@gmail.com</span>,
      phoneNumber: <span className="phone_number">+234 8123456790</span>,
      totalShipment: <span className="totalShipment">10</span>,
      buttons: (
        <div className="d-flex buttons">
          <Link href={'/admin-view-shipments'}>
            <button className="our-btn ">View Details </button>
          </Link>

          <Link href={'/admin-settings'}>
            <button className="our-btn our-btn-white">View Profile </button>
          </Link>
        </div>
      ),
    },
    {
      key: '6',
      NAME: <span className="name">Atanda Damilare</span>,
      EMAIL: <span className="email">atandadray@gmail.com</span>,
      phoneNumber: <span className="phone_number">+234 8123456790</span>,
      totalShipment: <span className="totalShipment">10</span>,
      buttons: (
        <div className="d-flex buttons">
          <Link href={'/admin-view-shipments'}>
            <button className="our-btn ">View Details </button>
          </Link>

          <Link href={'/admin-settings'}>
            <button className="our-btn our-btn-white">View Profile </button>
          </Link>
        </div>
      ),
    },
    {
      key: '7',
      NAME: <span className="name">Atanda Damilare</span>,
      EMAIL: <span className="email">atandadray@gmail.com</span>,
      phoneNumber: <span className="phone_number">+234 8123456790</span>,
      totalShipment: <span className="totalShipment">10</span>,
      buttons: (
        <div className="d-flex buttons">
          <Link href={'/admin-view-shipments'}>
            <button className="our-btn ">View Details </button>
          </Link>

          <Link href={'/admin-settings'}>
            <button className="our-btn our-btn-white">View Profile </button>
          </Link>
        </div>
      ),
    },
    {
      key: '8',
      NAME: <span className="name">Atanda Damilare</span>,
      EMAIL: <span className="email">atandadray@gmail.com</span>,
      phoneNumber: <span className="phone_number">+234 8123456790</span>,
      totalShipment: <span className="totalShipment">10</span>,
      buttons: (
        <div className="d-flex buttons">
          <Link href={'/admin-view-shipments'}>
            <button className="our-btn ">View Details </button>
          </Link>

          <Link href={'/admin-settings'}>
            <button className="our-btn our-btn-white">View Profile </button>
          </Link>
        </div>
      ),
    },
    {
      key: '9',
      NAME: <span className="name">Atanda Damilare</span>,
      EMAIL: <span className="email">atandadray@gmail.com</span>,
      phoneNumber: <span className="phone_number">+234 8123456790</span>,
      totalShipment: <span className="totalShipment">10</span>,
      buttons: (
        <div className="d-flex buttons">
          <Link href={'/admin-view-shipments'}>
            <button className="our-btn ">View Details </button>
          </Link>

          <Link href={'/admin-settings'}>
            <button className="our-btn our-btn-white">View Profile </button>
          </Link>
        </div>
      ),
    },
    {
      key: '10',
      NAME: <span className="name">Atanda Damilare</span>,
      EMAIL: <span className="email">atandadray@gmail.com</span>,
      phoneNumber: <span className="phone_number">+234 8123456790</span>,
      totalShipment: <span className="totalShipment">10</span>,
      buttons: (
        <div className="d-flex buttons">
          <Link href={'/admin-view-shipments'}>
            <button className="our-btn ">View Details </button>
          </Link>

          <Link href={'/admin-settings'}>
            <button className="our-btn our-btn-white">View Profile </button>
          </Link>
        </div>
      ),
    },
  ];

  const columns = [
    {
      title: (
        <div className="d-flex">
          <span>NAME</span>
        </div>
      ),
      dataIndex: 'NAME',
      key: 'NAME',
      //   width: 140,
    },
    {
      title: (
        <div className="d-flex">
          <span>EMAIL</span>
        </div>
      ),
      dataIndex: 'EMAIL',
      key: 'EMAIL',
      className: 'EMAIL',
      //   width: 200,
    },

    {
      title: (
        <div className="d-flex">
          <span>PHONE NUMBER</span>
        </div>
      ),
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      //   width: 160,
    },

    {
      title: <span>TOTAL SHIPMENTS</span>,
      dataIndex: 'totalShipment',
      key: 'totalShipment',
      //   width: 100,
    },

    {
      title: '',
      dataIndex: 'buttons',
      key: 'buttons',
      //   width: 120,
    },
  ];
  return (
    <div className="registered-members-table">
      <Table dataSource={dataSource} columns={columns} loading={!true} />
    </div>
  );
}
