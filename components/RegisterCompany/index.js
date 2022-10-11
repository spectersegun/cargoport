import { Button, Checkbox, Form, Input, Select } from 'antd';

import React from 'react';
import Link from 'next/link';

export default function RegisterCompany() {
  const { Option } = Select;

  const onFinish = values => {
    console.log('Success:', values);
  };

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="login-forms">
      <div className="row">
        <h4>Company Details</h4>
        <p className="form-info">Kindly fill in your company details below</p>
      </div>
      <div className="row">
        <Form name="login" onFinish={onFinish}>
          <Form.Item
            name="companyName"
            rules={[
              {
                required: true,
                message: 'Please input your Company Name',
              },
            ]}
          >
            <Input placeholder="Company Name" />
          </Form.Item>

          <Form.Item
            name="password"
            className=""
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Select
              defaultValue="Annual International Freight Shipment"
              onChange={handleChange}
            >
              <Option value="jack">Jack</Option>
              <Option value="Annual International Freight Shipment">
                Annual International Freight Shipment
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="Country"
            className="mb-40"
            rules={[{ required: true, message: 'Please input your Country!' }]}
          >
            <Select defaultValue="Country" onChange={handleChange}>
              <Option value="Nigeria">Nigeria</Option>
              <Option value="Country">Country</Option>
              <Option value="England">England</Option>
            </Select>
          </Form.Item>

          <Form.Item className="mb-0">
            <Button className="btn mb-0" htmlType="submit">
              Proceed
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
