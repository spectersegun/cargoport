import Image from 'next/image';
import React from 'react';
import DidsOne from '../Vectors/DidsOne';
import DidsTwo from '../Vectors/DidsTwo';
import DidsThree from '../Vectors/DidsThree';
import DidsFive from '../Vectors/DidsFive';
import DidsSix from '../Vectors/DidsSix';
import FooterPay from '../Vectors/FooterPay';
import { Radio, Form, Select, Button } from 'antd';

export default function HomeFirstSec() {
  const { Option } = Select;

  const onFinish = values => {
    console.log('Success:', values);
  };

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  return (
    <section className="home-first-sec">
      <div className="home-hero">
        <div className="hero container">
          <div className="row">
            <h1>Be in charge of your supply chain</h1>
            <h4>
              Increase performance growth for your supply chain. Ship to and
              from anywhere. Track all inventory.
            </h4>
          </div>

          <div className="row justify-content-center  explain">
            <div className="col-sm-auto">
              <button className="btn ">Ship with Cargoport</button>
            </div>
            <div className="col-sm-auto">
              <button className="btn hiworks">
                {' '}
                <FooterPay className="me-2" /> See how it works
              </button>
            </div>
          </div>

          <div className="row d-none d-md-flex">
            <div className="col-12 ">
              <Image
                src={'/image/home-hero.png'}
                width={1240}
                height={560}
                alt="hero"
                objectFit="contain"
                quality={100}
                priority={true}
                layout="responsive"
              />
            </div>
          </div>
        </div>
        <div className="container get-quote">
          <div className="row">
            <div className="col-lg order-lg-1 order-2">
              <div className="haulage-wrapper">
                <h5>Get the cheapest ocean and inland haulage rates</h5>
                <label className="shipment-label">Select Shipment type</label>

                <div className="row">
                  <Form onFinish={onFinish} name="rates">
                    <Form.Item name="method">
                      <Radio.Group name="radiogroup" defaultValue={1}>
                        <div className="row mx-0 checkboxs">
                          <div className="col">
                            <Radio value={'import'}>Import</Radio>
                          </div>
                          <div className="col">
                            <Radio value={'export'}>Export</Radio>
                          </div>
                        </div>
                      </Radio.Group>
                    </Form.Item>

                    <Form.Item name="from">
                      <Select
                        defaultValue="Select port of discharge"
                        style={{ width: '100%', maxWidth: '100%' }}
                        onChange={handleChange}
                      >
                        <Option value="Lagos">Lagos</Option>
                        <Option value="Los Angeles">Los Angeles</Option>
                        <Option value="London">London</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item name="to">
                      <Select
                        defaultValue="Select port of destination"
                        style={{ width: '100%', maxWidth: '100%' }}
                        onChange={handleChange}
                      >
                        <Option value="Lagos">Lagos</Option>
                        <Option value="Los Angeles">Los Angeles</Option>
                        <Option value="London">London</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item>
                      <Button htmlType="submit">Submit</Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>

            <div className="col-lg quote order-lg-2 order-1">
              <h4>Get Quote</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="supply-chain">
        <div className="container">
          <div className="row justify-content-center">
            <h3>What can your supply chain do?</h3>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h5>
          </div>

          <div className="row dids-card">
            <div className="col-lg-4 col-md-6  col-sm-12">
              <div className="dids d-flex ">
                <div>
                  <DidsOne />
                </div>
                <div>
                  <h6>Ship</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pellentesque{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  col-sm-12">
              <div className="dids d-flex ">
                <div>
                  <DidsTwo />
                </div>
                <div>
                  <h6>Finance</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pellentesque{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  col-sm-12">
              <div className="dids d-flex ">
                <div>
                  <DidsThree />
                </div>
                <div>
                  <h6>Clear</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pellentesque{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  col-sm-12">
              <div className="dids d-flex ">
                <div>
                  <DidsThree />
                </div>
                <div>
                  <h6>Protect</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pellentesque{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  col-sm-12">
              <div className="dids d-flex ">
                <div>
                  <DidsFive />
                </div>
                <div>
                  <h6>Destination</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pellentesque{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  col-sm-12">
              <div className="dids d-flex ">
                <div>
                  <DidsSix />
                </div>
                <div>
                  <h6>Growth</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pellentesque{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
