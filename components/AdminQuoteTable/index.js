import React from 'react';
import { Table } from 'antd';
import Ship from '../Vectors/Ship';
import Locations from '../Vectors/Locations';
import TradeTrendUp from '../Vectors/TradeTrendUp';
import TradeTrendDown from '../TradeCard/TradeTrendDown';
import Link from 'next/link';

export default function AdminQuoteTable({ from }) {
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

      shipping: <span className="shipping-table">12345678</span>,
      view: (
        <Link
          href={
            from == 'dashboard'
              ? '/invoice-dash'
              : from == 'order'
              ? '/admin-quote-summary'
              : from == '/quote'
              ? '/quote-summary'
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
    },

    {
      title: <span># SHIPPING ID</span>,
      dataIndex: 'shipping',
      key: 'shipping',
    },
    {
      title: 'DATE OF ISSUE',
      dataIndex: 'date',
      key: 'date',
      width: 120,
    },
    {
      title: '',
      dataIndex: 'view',
      key: 'view',
    },
  ];
  return (
    <>
      <div className="quotes-page documents admin-quote-table">
        <h4 className="ourfont14 text600">New Orders - 12</h4>
        <Table dataSource={dataSource} columns={columns} loading={!true} />
      </div>
    </>
  );
}
