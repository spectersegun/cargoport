import React from 'react';
import { Table } from 'antd';
import Link from 'next/link';

export default function AdminTradeTable({ from }) {
  const dataSource = [
    {
      key: '1',
      NO: 1,
      Name: 'Atanda Specter',
      shipping: <span className="shipping-table">12345678</span>,
      Total: '$ 13,000.00',
      Outstanding: '$ 13,000.00',
      view: (
        <Link
          href={
            from == 'dashboard'
              ? '/invoice-dash'
              : from == 'order'
              ? '/admin-quote-summary'
              : from == 'adminshipment'
              ? '/admin-shipment-details'
              : from == '/quote'
              ? '/quote-summary'
              : ''
          }
        >
          <button className="our-btn">View Profile</button>
        </Link>
      ),
    },
    {
      key: '2',
      NO: 2,
      Name: 'Atanda Specter',

      shipping: <span className="shipping-table">12345678</span>,
      Total: '$ 13,000.00',
      Outstanding: '$ 13,000.00',

      view: (
        <Link
          href={
            from == 'dashboard'
              ? '/invoice-dash'
              : from == 'order'
              ? '/admin-quote-summary'
              : from == 'adminshipment'
              ? '/admin-shipment-details'
              : from == '/quote'
              ? '/quote-summary'
              : ''
          }
        >
          <button className="our-btn">View Profile</button>
        </Link>
      ),
    },
    {
      key: '3',
      NO: 3,
      Name: 'Atanda Specter',

      shipping: <span className="shipping-table">12345678</span>,
      Total: '$ 13,000.00',
      Outstanding: '$ 13,000.00',
      view: (
        <Link
          href={
            from == 'dashboard'
              ? '/invoice-dash'
              : from == 'order'
              ? '/admin-quote-summary'
              : from == 'adminshipment'
              ? '/admin-shipment-details'
              : from == '/quote'
              ? '/quote-summary'
              : ''
          }
        >
          <button className="our-btn">View Profile</button>
        </Link>
      ),
    },
    {
      key: '4',
      NO: 4,
      Name: 'Atanda Specter',

      shipping: <span className="shipping-table">12345678</span>,
      Total: '$ 13,000.00',
      Outstanding: '$ 13,000.00',
      view: (
        <Link
          href={
            from == 'dashboard'
              ? '/invoice-dash'
              : from == 'order'
              ? '/admin-quote-summary'
              : from == 'adminshipment'
              ? '/admin-shipment-details'
              : from == '/quote'
              ? '/quote-summary'
              : ''
          }
        >
          <button className="our-btn">View Profile</button>
        </Link>
      ),
    },
    {
      key: '5',
      NO: 5,
      Name: 'Atanda Specter',

      shipping: <span className="shipping-table">12345678</span>,
      Total: '$ 13,000.00',
      Outstanding: '$ 13,000.00',
      view: (
        <Link
          href={
            from == 'dashboard'
              ? '/invoice-dash'
              : from == 'order'
              ? '/admin-quote-summary'
              : from == 'adminshipment'
              ? '/admin-shipment-details'
              : from == '/quote'
              ? '/quote-summary'
              : ''
          }
        >
          <button className="our-btn">View Profile</button>
        </Link>
      ),
    },
    {
      key: '6',
      NO: 6,
      Name: 'Atanda Specter',

      shipping: <span className="shipping-table">12345678</span>,
      Total: '$ 13,000.00',
      Outstanding: '$ 13,000.00',
      view: (
        <Link
          href={
            from == 'dashboard'
              ? '/invoice-dash'
              : from == 'order'
              ? '/admin-quote-summary'
              : from == 'adminshipment'
              ? '/admin-shipment-details'
              : from == '/quote'
              ? '/quote-summary'
              : ''
          }
        >
          <button className="our-btn">View Profile</button>
        </Link>
      ),
    },
    {
      key: '7',
      NO: 7,
      Name: 'Atanda Specter',

      shipping: <span className="shipping-table">12345678</span>,
      Total: '$ 13,000.00',
      Outstanding: '$ 13,000.00',
      view: (
        <Link
          href={
            from == 'dashboard'
              ? '/invoice-dash'
              : from == 'order'
              ? '/admin-quote-summary'
              : from == 'adminshipment'
              ? '/admin-shipment-details'
              : from == '/quote'
              ? '/quote-summary'
              : ''
          }
        >
          <button className="our-btn">View Profile</button>
        </Link>
      ),
    },
    {
      key: '8',
      NO: 8,
      Name: 'Atanda Specter',

      shipping: <span className="shipping-table">12345678</span>,
      Total: '$ 13,000.00',
      Outstanding: '$ 13,000.00',
      view: (
        <Link
          href={
            from == 'dashboard'
              ? '/invoice-dash'
              : from == 'order'
              ? '/admin-quote-summary'
              : from == 'adminshipment'
              ? '/admin-shipment-details'
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
      key: '9',
      NO: 9,
      Name: 'Atanda Specter',

      shipping: <span className="shipping-table">12345678</span>,
      Total: '$ 13,000.00',
      Outstanding: '$ 13,000.00',
      view: (
        <Link
          href={
            from == 'dashboard'
              ? '/invoice-dash'
              : from == 'order'
              ? '/admin-quote-summary'
              : from == 'adminshipment'
              ? '/admin-shipment-details'
              : from == '/quote'
              ? '/quote-summary'
              : ''
          }
        >
          <button className="our-btn">View Profile</button>
        </Link>
      ),
    },
    {
      key: '10',
      NO: 10,
      Name: 'Atanda Specter',

      shipping: <span className="shipping-table">12345678</span>,
      Total: '$ 13,000.00',
      Outstanding: '$ 13,000.00',
      view: (
        <Link
          href={
            from == 'dashboard'
              ? '/invoice-dash'
              : from == 'order'
              ? '/admin-quote-summary'
              : from == 'adminshipment'
              ? '/admin-shipment-details'
              : from == '/quote'
              ? '/quote-summary'
              : ''
          }
        >
          <button className="our-btn">View Profile</button>
        </Link>
      ),
    },
  ];

  const columns = [
    {
      title: 'No',
      dataIndex: 'NO',
      key: 'NO',
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: <span># SHIPPING ID</span>,
      dataIndex: 'shipping',
      key: 'shipping',
    },
    {
      title: 'TOTAL AMOUNT',
      dataIndex: 'Total',
      key: 'Total',
    },
    {
      title: 'OUTSTANDING AMOUNT',
      dataIndex: 'Outstanding',
      key: 'Outstanding',
    },
    {
      title: '',
      dataIndex: 'view',
      key: 'view',
    },
  ];
  return (
    <>
      <div className="quotes-page documents admin-quote-table none-striped">
        <h4 className="ourfont14 text600">New Orders - 12</h4>
        <Table dataSource={dataSource} columns={columns} loading={!true} />
      </div>
    </>
  );
}
