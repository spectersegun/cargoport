import Link from 'next/link';
import React from 'react';
import SubHeader from '../QuoteWrapper/SubHeader';
import { useRouter } from 'next/router';

import { Button, Form, Input, Radio, Select } from 'antd';
import UploadSvg from '../Vectors/UploadSvg';

export default function QuoteStepOne({ dash }) {
  const router = useRouter();

  const { Option } = Select;

  const onFinish = values => {
    console.log('Success:', values);
    if (dash) {
      router.push('/dash-quote-step-two');
    } else {
      router.push('/quote-step-two');
    }
  };

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <div className="">
        <ul className="d-flex px-0 list-progress justify-content-between">
          <li className="list-progress-item active">1</li>
          <li className="list-progress-item">2</li>
          <li className="list-progress-item">3</li>
          <li className="list-progress-item ">4</li>
        </ul>
      </div>

      <div className="quotes">
        <div className="quote">
          <SubHeader h4="Location" h5="Select the location of your shipment" />
          <label>Upload Statement of Account</label>
          <Form
            onFinish={onFinish}
            name="rates"
            className="haulage-wrapper p-0"
          >
            <Form.Item name="method">
              <Radio.Group name="radiogroup" defaultValue={'port'}>
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
              <Button htmlType="submit">Proceed</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}

QuoteStepOne.dafaulProps = {
  dash: false,
};
