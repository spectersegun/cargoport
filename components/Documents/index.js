import React from 'react';
import { Space, Table, Tag } from 'antd';

export default function Documents() {
  const dataSource = [
    {
      key: '1',
      no: '1',
      documentName: 'Atanda Damilare bank account statement',
      date: 'August 14,2022',
      view: <button className="our-btn">View Document </button>,
    },
    {
      key: '2',
      no: '2',
      documentName: 'Atanda Damilare bank account statement',
      date: 'August 14,2022',
      view: <button className="our-btn">View Document </button>,
    },
    {
      key: '3',
      no: '3',
      documentName: 'Atanda Damilare bank account statement',
      date: 'August 14,2022',
      view: <button className="our-btn">View Document </button>,
    },
    {
      key: '4',
      no: '4',
      documentName: 'Atanda Damilare bank account statement',
      date: 'August 14,2022',
      view: <button className="our-btn">View Document </button>,
    },
    {
      key: '5',
      no: '5',
      documentName: 'Atanda Damilare bank account statement',
      date: 'August 14,2022',
      view: <button className="our-btn">View Document </button>,
    },
    {
      key: '6',
      no: '6',
      documentName: 'Atanda Damilare bank account statement',
      date: 'August 14,2022',
      view: <button className="our-btn">View Document </button>,
    },
    {
      key: '7',
      no: '7',
      documentName: 'Atanda Damilare bank account statement',
      date: 'August 14,2022',
      view: <button className="our-btn">View Document </button>,
    },
    {
      key: '8',
      no: '8',
      documentName: 'Atanda Damilare bank account statement',
      date: 'August 14,2022',
      view: <button className="our-btn">View Document </button>,
    },
    {
      key: '9',
      no: '9',
      documentName: 'Atanda Damilare bank account statement',
      date: 'August 14,2022',
      view: <button className="our-btn">View Document </button>,
    },
    {
      key: '10',
      no: '10',
      documentName: 'Atanda Damilare bank account statement',
      date: 'August 14,2022',
      view: <button className="our-btn">View Document </button>,
    },
  ];

  const columns = [
    {
      title: 'NO',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'DOCUMENT NAME',
      dataIndex: 'documentName',
      key: 'documentName',
    },
    {
      title: 'DATE UPLOADED',
      dataIndex: 'date',
      key: 'date',
      //   width: 100,
    },
    {
      title: '',
      dataIndex: 'view',
      key: 'view',
    },
  ];

  return (
    <section style={{ background: '#FAFBFD' }} className="documents">
      <div className="container">
        <div className="row top-bar-space">
          <h4 className="subHeader">All Documents - 10</h4>
        </div>
        <div className="row">
          <Table dataSource={dataSource} columns={columns} loading={!true} />;
        </div>
      </div>
    </section>
  );
}
