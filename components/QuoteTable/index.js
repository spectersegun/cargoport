import React from 'react';
import { Table } from 'antd';
import Ship from '../Vectors/Ship';
import Locations from '../Vectors/Locations';
import TradeTrendUp from '../Vectors/TradeTrendUp';
import TradeTrendDown from '../TradeCard/TradeTrendDown';
import Link from 'next/link';

export default function QuoteTable({ from }) {
  const dataSource = [
    {
      key: '1',
      shipmentType: (
        <span className="shipment-type">
          <TradeTrendUp width="20px" height="20px" />
          Export
        </span>
      ),
      origin: <span className="origin">Berger Bus stop, Ojodu Berger</span>,
      destination: (
        <div className="ddestination">
          <p>Zuid-Holland Rotterdam</p>
          <span>Netherland</span>
        </div>
      ),
      documentName: 'Atanda Damilare bank account statement',
      date: <span className="date">August 14,2022 </span>,
      status: <span className="status preparing">• Preparing</span>,

      shipping: <span className="shipping-table">12345678</span>,
      view: (
        <Link
          href={
            from == 'dashboard'
              ? '/invoice-dash'
              : from == 'quote'
              ? 'quote-summary'
              : ''
          }
        >
          <button className="our-btn">View Details </button>
        </Link>
      ),
    },
    {
      key: '2',
      shipmentType: (
        <span className="shipment-type">
          <TradeTrendDown width="20px" height="20px" />
          Import
        </span>
      ),
      origin: <span className="origin">Berger Bus stop, Ojodu Berger</span>,
      destination: (
        <div className="ddestination">
          <p>Abu Dhabi</p>
          <span>United Arab Emirates</span>
        </div>
      ),
      documentName: 'Atanda Damilare bank account statement',
      date: <span className="date">August 14,2022 </span>,
      status: <span className="status approved">• Approved</span>,
      shipping: <span className="shipping-table">12345678</span>,

      view: (
        <Link
          href={
            from == 'dashboard'
              ? '/invoice-dash'
              : from == 'quote'
              ? 'quote-summary'
              : ''
          }
        >
          <button className="our-btn">View Details </button>
        </Link>
      ),
    },
    {
      key: '3',
      shipmentType: (
        <span className="shipment-type">
          <TradeTrendUp width="20px" height="20px" />
          Export
        </span>
      ),
      origin: <span className="origin">Berger Bus stop, Ojodu Berger</span>,
      destination: (
        <div className="ddestination">
          <p>Abu Dhabi</p>
          <span>United Arab Emirates</span>
        </div>
      ),
      documentName: 'Atanda Damilare bank account statement',
      date: <span className="date">August 14,2022 </span>,
      status: <span className="status shipment-status">• Shipment</span>,
      shipping: <span className="shipping-table">12345678</span>,
      view: (
        <Link
          href={
            from == 'dashboard'
              ? '/invoice-dash'
              : from == 'quote'
              ? 'quote-summary'
              : ''
          }
        >
          <button className="our-btn">View Details </button>
        </Link>
      ),
    },
    {
      key: '4',
      shipmentType: (
        <span className="shipment-type">
          <TradeTrendDown width="20px" height="20px" />
          Import
        </span>
      ),
      origin: <span className="origin">Berger Bus stop, Ojodu Berger</span>,
      destination: (
        <div className="ddestination">
          <p>Abu Dhabi</p>
          <span>United Arab Emirates</span>
        </div>
      ),
      documentName: 'Atanda Damilare bank account statement',
      date: <span className="date">August 14,2022 </span>,
      status: <span className="status shipment-status">• Shipment</span>,
      shipping: <span className="shipping-table">12345678</span>,
      view: (
        <Link
          href={
            from == 'dashboard'
              ? '/invoice-dash'
              : from == 'quote'
              ? 'quote-summary'
              : ''
          }
        >
          <button className="our-btn">View Details </button>
        </Link>
      ),
    },
    {
      key: '5',
      shipmentType: (
        <span className="shipment-type">
          <TradeTrendUp width="20px" height="20px" />
          Export
        </span>
      ),
      origin: <span className="origin">Berger Bus stop, Ojodu Berger</span>,
      destination: (
        <div className="ddestination">
          <p>Abu Dhabi</p>
          <span>United Arab Emirates</span>
        </div>
      ),
      documentName: 'Atanda Damilare bank account statement',
      date: <span className="date">August 14,2022 </span>,
      status: <span className="status shipment-status">• Shipment</span>,
      shipping: <span className="shipping-table">12345678</span>,
      view: (
        <Link
          href={
            from == 'dashboard'
              ? '/invoice-dash'
              : from == 'quote'
              ? 'quote-summary'
              : ''
          }
        >
          <button className="our-btn">View Details </button>
        </Link>
      ),
    },
    {
      key: '6',
      shipmentType: (
        <span className="shipment-type">
          <TradeTrendDown width="20px" height="20px" />
          Import
        </span>
      ),
      origin: <span className="origin">Berger Bus stop, Ojodu Berger</span>,
      destination: (
        <div className="ddestination">
          <p>Abu Dhabi</p>
          <span>United Arab Emirates</span>
        </div>
      ),
      documentName: 'Atanda Damilare bank account statement',
      date: <span className="date">August 14,2022 </span>,
      status: <span className="status shipment-status">• Shipment</span>,
      shipping: <span className="shipping-table">12345678</span>,
      view: (
        <Link
          href={
            from == 'dashboard'
              ? '/invoice-dash'
              : from == 'quote'
              ? 'quote-summary'
              : ''
          }
        >
          <button className="our-btn">View Details </button>
        </Link>
      ),
    },
    {
      key: '7',
      shipmentType: (
        <span className="shipment-type">
          <TradeTrendUp width="20px" height="20px" />
          Export
        </span>
      ),
      origin: <span className="origin">Berger Bus stop, Ojodu Berger</span>,
      destination: (
        <div className="ddestination">
          <p>Abu Dhabi</p>
          <span>United Arab Emirates</span>
        </div>
      ),
      documentName: 'Atanda Damilare bank account statement',
      date: <span className="date">August 14,2022 </span>,
      status: <span className="status shipment-status">• Shipment</span>,
      shipping: <span className="shipping-table">12345678</span>,
      view: (
        <Link
          href={
            from == 'dashboard'
              ? '/invoice-dash'
              : from == 'quote'
              ? 'quote-summary'
              : ''
          }
        >
          <button className="our-btn">View Details </button>
        </Link>
      ),
    },
    {
      key: '8',
      shipmentType: (
        <span className="shipment-type">
          <TradeTrendDown width="20px" height="20px" />
          Import
        </span>
      ),
      origin: <span className="origin">Berger Bus stop, Ojodu Berger</span>,
      destination: (
        <div className="ddestination">
          <p>Abu Dhabi</p>
          <span>United Arab Emirates</span>
        </div>
      ),
      documentName: 'Atanda Damilare bank account statement',
      date: <span className="date">August 14,2022 </span>,
      status: <span className="status shipment-status">• Shipment</span>,
      shipping: <span className="shipping-table">12345678</span>,
      view: (
        <Link
          href={
            from == 'dashboard'
              ? '/invoice-dash'
              : from == 'quote'
              ? 'quote-summary'
              : ''
          }
        >
          <button className="our-btn">View Details </button>
        </Link>
      ),
    },
    {
      key: '9',
      shipmentType: (
        <span className="shipment-type">
          <TradeTrendUp width="20px" height="20px" />
          Export
        </span>
      ),
      origin: <span className="origin">Berger Bus stop, Ojodu Berger</span>,
      destination: (
        <div className="ddestination">
          <p>Abu Dhabi</p>
          <span>United Arab Emirates</span>
        </div>
      ),
      documentName: 'Atanda Damilare bank account statement',
      date: <span className="date">August 14,2022 </span>,
      status: <span className="status shipment-status">• Shipment</span>,
      shipping: <span className="shipping-table">12345678</span>,
      view: (
        <Link
          href={
            from == 'dashboard'
              ? '/invoice-dash'
              : from == 'quote'
              ? 'quote-summary'
              : ''
          }
        >
          <button className="our-btn">View Details </button>
        </Link>
      ),
    },
    {
      key: '10',
      shipmentType: (
        <span className="shipment-type">
          <TradeTrendDown width="20px" height="20px" />
          Import
        </span>
      ),
      origin: <span className="origin">Berger Bus stop, Ojodu Berger</span>,
      destination: (
        <div className="ddestination">
          <p>Abu Dhabi</p>
          <span>United Arab Emirates</span>
        </div>
      ),
      documentName: 'Atanda Damilare bank account statement',
      date: <span className="date">August 14,2022 </span>,
      status: <span className="status shipment-status">• Shipment</span>,
      shipping: <span className="shipping-table">12345678</span>,
      view: (
        <Link
          href={
            from == 'dashboard'
              ? '/invoice-dash'
              : from == 'quote'
              ? 'quote-summary'
              : ''
          }
        >
          <button className="our-btn">View Details </button>
        </Link>
      ),
    },
  ];

  const columns = [
    {
      title: (
        <div className="d-flex">
          <span className="col-auto">
            <Ship color="#214461" width="20px" height="20px" />
          </span>
          <span>SHIPMENT TYPE</span>
        </div>
      ),
      dataIndex: 'shipmentType',
      key: 'shipmentType',
      //   width: 140,
    },
    {
      title: (
        <div className="d-flex">
          <span className="col-auto">
            <Locations width="20px" height="20px" />
          </span>
          <span>ORIGIN</span>
        </div>
      ),
      dataIndex: 'origin',
      key: 'origin',
      className: 'origin-wrapper',
      //   width: 200,
    },

    {
      title: (
        <div className="d-flex">
          <span className="col-auto">
            <Locations
              width="20px"
              height="20px"
              color="#307460"
              className="icons"
            />
          </span>
          <span>DESTINATION</span>
        </div>
      ),
      dataIndex: 'destination',
      key: 'destination',
      //   width: 160,
    },

    {
      title: <span># SHIPPING ID</span>,
      dataIndex: 'shipping',
      key: 'shipping',
      //   width: 100,
    },
    {
      title: 'DATE OF ISSUE',
      dataIndex: 'date',
      key: 'date',
      width: 120,
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      key: 'status',
      //   width: 200,
    },
    {
      title: '',
      dataIndex: 'view',
      key: 'view',
      //   width: 120,
    },
  ];
  return (
    <>
      <Table dataSource={dataSource} columns={columns} loading={!true} />
    </>
  );
}
