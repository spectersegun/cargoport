// import React, { useState } from 'react';
// import { Table } from 'antd';

// export default function ServiceProviderTable() {
//   const [selectedRowKeys, setSelectedRowKeys] = useState([]);
//   const columns = [
//     {
//       title: 'STATUS',
//       dataIndex: 'Status',
//       key: 'Status',
//     },
//     {
//       title: 'PROVIDER',
//       dataIndex: 'Provider',
//       key: 'Provider',
//     },
//     {
//       title: 'SERVICES',
//       dataIndex: 'Service',
//       key: 'Service',
//     },
//     {
//       title: 'TOTAL SHIPMENTS',
//       dataIndex: 'Total',
//       key: 'Total',
//     },
//     {
//       title: 'ACTION',
//       dataIndex: 'Action',
//       key: 'Action',
//     },
//   ];

//   const data = [];
//   for (let i = 0; i < 24; i++) {
//     data.push({
//       key: i,
//       Status: '',
//       Provider: 'Logigrains',
//       Service: 'Custom Brokage + Terminal Handling Cost',
//       Total: 40,
//       address: `London, Park Lane no. ${i}`,
//     });
//   }

//   //   const datas = [
//   //     {
//   //       key: 1,
//   //       name: `Edward King ${i}`,
//   //       age: 32,
//   //       address: `London, Park Lane no. ${i}`,
//   //     },
//   //   ];

//   const onSelectChange = newSelectedRowKeys => {
//     console.log('selectedRowKeys changed: ', newSelectedRowKeys);
//     setSelectedRowKeys(newSelectedRowKeys);
//   };

//   const rowSelection = {
//     selectedRowKeys,
//     onChange: onSelectChange,
//     selections: [
//       Table.SELECTION_ALL,
//       Table.SELECTION_INVERT,
//       Table.SELECTION_NONE,
//       {
//         key: 'odd',
//         text: 'Select Odd Row',
//         onSelect: changableRowKeys => {
//           let newSelectedRowKeys = [];
//           newSelectedRowKeys = changableRowKeys.filter((_, index) => {
//             if (index % 2 !== 0) {
//               return false;
//             }
//             return true;
//           });
//           setSelectedRowKeys(newSelectedRowKeys);
//         },
//       },
//       {
//         key: 'even',
//         text: 'Select Even Row',
//         onSelect: changableRowKeys => {
//           let newSelectedRowKeys = [];
//           newSelectedRowKeys = changableRowKeys.filter((_, index) => {
//             if (index % 2 !== 0) {
//               return true;
//             }
//             return false;
//           });
//           setSelectedRowKeys(newSelectedRowKeys);
//         },
//       },
//     ],
//   };

//   return (
//     <div className="row none-striped ">
//       <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
//     </div>
//   );
// }

import React from 'react';
import { Table } from 'antd';
import Ship from '../Vectors/Ship';
import Locations from '../Vectors/Locations';
import TradeTrendUp from '../Vectors/TradeTrendUp';
import TradeTrendDown from '../TradeCard/TradeTrendDown';
import Link from 'next/link';
import Remove from '../Vectors/Remove';

export default function AdminTradeTable() {
  const handleModal = () => {
    console.log('remove');
  };
  const dataSource = [
    {
      key: '1',
      Status: <div className=""> </div>,
      Provider: <div className="provider-in">Logigrains</div>,
      Service: 'Custom Brokage + Terminal Handling Cost',
      Total: 30,
      Action: (
        <div className="d-flex sp-button">
          <Link href={'/admin-service-provider-list'}>
            <button className="our-btn">View All Shipments</button>
          </Link>
          <button className="our-btn our-btn-white" onClick={handleModal}>
            <Remove /> Remove
          </button>
        </div>
      ),
    },
    {
      key: '2',
      Provider: <div className="provider-in">MAERSK</div>,
      Service: 'Shipping Charges',
      Total: 40,
      Action: (
        <div className="d-flex sp-button">
          <Link href={'/admin-service-provider-list'}>
            <button className="our-btn">View All Shipments</button>
          </Link>
          <button className="our-btn our-btn-white" onClick={handleModal}>
            <Remove /> Remove
          </button>
        </div>
      ),
    },
    {
      key: '3',
      Provider: <div className="provider-in">Cargoport</div>,
      Service: 'Warehousing',
      Total: 32,
      Action: (
        <div className="d-flex sp-button">
          <Link href={'/admin-service-provider-list'}>
            <button className="our-btn">View All Shipments</button>
          </Link>
          <button className="our-btn our-btn-white" onClick={handleModal}>
            <Remove /> Remove
          </button>
        </div>
      ),
    },
    {
      key: '4',
      Provider: <div className="provider-in">Zenith Insurance</div>,
      Service: 'Insurance',
      Total: 20,
      Action: (
        <div className="d-flex sp-button">
          <Link href={'/admin-service-provider-list'}>
            <button className="our-btn">View All Shipments</button>
          </Link>
          <button className="our-btn our-btn-white" onClick={handleModal}>
            <Remove /> Remove
          </button>
        </div>
      ),
    },
    {
      key: '5',
      Provider: <div className="provider-in">NSIA Insurance</div>,
      Service: 'Insurance',
      Total: 10,
      Action: (
        <div className="d-flex sp-button">
          <Link href={'/admin-service-provider-list'}>
            <button className="our-btn">View All Shipments</button>
          </Link>
          <button className="our-btn our-btn-white" onClick={handleModal}>
            <Remove /> Remove
          </button>
        </div>
      ),
    },
    {
      key: '6',
      Provider: <div className="provider-in">Trade Finance</div>,
      Service: 'Cargoport',
      Total: 10,
      Outstanding: 40,
      Action: (
        <div className="d-flex sp-button">
          <Link href={'/admin-service-provider-list'}>
            <button className="our-btn">View All Shipments</button>
          </Link>
          <button className="our-btn our-btn-white" onClick={handleModal}>
            <Remove /> Remove
          </button>
        </div>
      ),
    },
  ];

  const columns = [
    {
      title: 'STATUS',
      dataIndex: 'Status',
      key: 'Status',
    },
    {
      title: 'PROVIDER',
      dataIndex: 'Provider',
      key: 'Provider',
    },
    {
      title: 'SERVICES',
      dataIndex: 'Service',
      key: 'Service',
    },
    {
      title: 'TOTAL SHIPMENTS',
      dataIndex: 'Total',
      key: 'Total',
    },
    {
      title: 'ACTION',
      dataIndex: 'Action',
      key: 'Action',
    },
  ];
  return (
    <>
      <div className="quotes-page documents admin-quote-table none-striped">
        <Table dataSource={dataSource} columns={columns} loading={!true} />
      </div>
    </>
  );
}
