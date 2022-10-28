import { Radio, Form, Select, Button } from 'antd';
import React from 'react';
import ShippingDetails from '../ShippingDetails';
import { useRouter } from 'next/router';

export default function Invoice({ insurance }) {
  const router = useRouter();
  const tableContent = [
    {
      no: 1,
      item: 'Custom Brokage & Terminal ',
      by: 'by Logigrains',
      price: 'N 200,000.00',
    },
    {
      no: 2,
      item: 'Inland Logistics',
      by: 'by Cargoport',
      price: 'N 200,000.00',
    },
    {
      no: 3,
      item: 'Ocean Freight',
      by: 'by Maersk',
      price: 'N 200,000.00',
    },
    {
      no: 4,
      item: 'Warehousing',
      by: 'by Cargoport',
      price: 'N 200,000.00',
    },
    {
      no: 5,
      item: 'Insurance',
      by: 'by Zenith Insurance',
      price: 'N 200,000.00',
    },
    {
      no: 6,
      item: 'Trade Finance',
      by: 'by  Cargoport',
      price: 'N 200,000.00',
    },
    {
      no: 7,
      item: 'Service Charge',
      by: 'by  Cargoport',
      price: 'N 200,000.00',
    },
  ];

  const onFinish = values => {
    console.log('Success:', values);
    router.push('/quote-payment-complete');
  };

  return (
    <section className="invoice-page client-bg">
      <div className="container-fluid">
        <div className="row top-bar-space">
          <div className="col-lg-7">
            <div
              className="d-flex justify-content-between"
              style={{ flexWrap: 'wrap' }}
            >
              <h4 className="subHeader">Shipment ID: 12345678</h4>
              <button className="our-btn download ">Download Invoice</button>
            </div>

            <div className="invoice-table-wrapper">
              <div className="thead d-flex">
                <div className="col d-flex">
                  <div className="col-auto no">
                    <p>NO</p>
                  </div>
                  <div className="col-auto items">
                    <p>ITEM(s)</p>
                  </div>
                </div>

                <div className="col-auto">
                  <p>PRICE</p>
                </div>
              </div>
              {tableContent.map((item, index) => (
                <div className="content d-flex" key={index}>
                  <div className="col d-flex">
                    <div className="col-auto">
                      <p className="no">{item.no}</p>
                    </div>
                    <div className="col items">
                      <h5>Custom Brokage &#38; Terminal </h5>
                      <h6>by Logigrains</h6>
                    </div>
                  </div>

                  <div className="col-auto">
                    <p className="price">N 200,000.00</p>
                  </div>
                </div>
              ))}
              <div className="content d-flex sub-total ">
                <div className="col-auto">
                  <div className="no"></div>
                </div>
                <div className="col">
                  <p className="ourfont14 text-sm-end">Sub Total</p>
                </div>
                <div className="col-auto">
                  <h4 className="ourfont14">N 5,000,000.00</h4>
                </div>
              </div>

              {insurance ? (
                <div className="content d-flex sub-total ">
                  <div className="col-auto">
                    <div className="no"></div>
                  </div>
                  <div className="col">
                    <p className="ourfont14 text-sm-end">
                      Trade finance Interest Charges (7%)
                    </p>
                  </div>
                  <div className="col-auto">
                    <h4 className="ourfont14">N 500,000.00</h4>
                  </div>
                </div>
              ) : (
                ''
              )}

              <div className="content d-flex total">
                <div className="col-auto">
                  <div className="no"></div>
                </div>
                <div className="col text-sm-end">
                  <p className="">Total</p>
                </div>
                <div className="col-auto">
                  <h4 className="">N 5,000,000.00</h4>
                </div>
              </div>
            </div>
            {insurance ? (
              <div className="mt-5 pt-3">
                <button className="our-btn ">Validate Shipment</button>
              </div>
            ) : (
              <Form onFinish={onFinish} name="rates">
                <div className="payment-option">
                  <h5>Select Payment Option</h5>

                  <Form.Item name="method">
                    <Radio.Group name="radiogroup" defaultValue={1}>
                      <div className="row mx-0 checkboxs">
                        <Radio value={'card'}>
                          Pay online with Credit/Debit card
                        </Radio>
                        <Radio value={'transfer'}>
                          Pay online with Credit/Debit card
                        </Radio>
                      </div>
                    </Radio.Group>
                  </Form.Item>
                </div>

                <button className="our-btn mt-4" type="submit">
                  Pay Now
                </button>
              </Form>
            )}
          </div>
          <div className="col-lg-5">
            <ShippingDetails />
          </div>
        </div>
      </div>
    </section>
  );
}
