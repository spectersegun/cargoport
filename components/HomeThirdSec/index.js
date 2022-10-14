import React from 'react';
import Tracklist from '../Vectors/Tracklist';
import Tracklist2 from '../Vectors/Tracklist2';
import Tracklist3 from '../Vectors/Tracklist3';
import Tracklist4 from '../Vectors/Tracklist4';
import Tracklist5 from '../Vectors/Tracklist5';
import { useRouter } from 'next/router';

// Tracklist2;
import { Radio, Form, Select, Button } from 'antd';

export default function HomeThirdSec() {
  const router = useRouter();
  const { Option } = Select;

  const onFinish = values => {
    console.log('Success:', values);
    router.push('/quote-step-two');
  };

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  return (
    <section className="third-section">
      <div className="shipping-experience">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 ">
              <h5>Essentials For The Best Shipping Experience</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            <div className="col-lg-7">
              <ul>
                <li>
                  <di>
                    <Tracklist />
                  </di>
                  <span>Live tracking and notification for shipment</span>
                </li>
                <li>
                  <di>
                    <Tracklist2 />
                  </di>
                  <span>Affordable rates</span>
                </li>
                <li>
                  <di>
                    <Tracklist3 />
                  </di>
                  <span>Friendly customer support</span>
                </li>
                <li>
                  <di>
                    <Tracklist4 />
                  </di>
                  <span>Swift Distribution Chain</span>
                </li>
                <li>
                  <di>
                    <Tracklist5 />
                  </di>
                  <span>Supply Chain Cost Provider</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="haulage-rates ">
        <div className="container">
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
      </div>
    </section>
  );
}
