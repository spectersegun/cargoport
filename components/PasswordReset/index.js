import { Button, Checkbox, Form, Input, Radio } from 'antd';

import React from 'react';
import Link from 'next/link';
import Checks from '../Vectors/Checks';

export default function PasswordReset() {
  const onFinish = values => {
    console.log('Success:', values);
  };

  return (
    <div className="login-forms">
      <div className="row">
        <h4>Password Reset</h4>
        <p className="form-info">Kindly reset your password below</p>
      </div>
      <div className="row">
        <Form name="login" onFinish={onFinish}>
          <Form.Item
            name="newPassword"
            className=""
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Enter your new password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            className=""
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Confirm your new password" />
          </Form.Item>

          <div className="d-flex flex-column validatee ">
            <div className="d-flex align-items-center">
              <span className="checks ">
                <Checks />
              </span>
              <span className="checkss">
                Password must be 8 or more characters long
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span className="checks ">
                <Checks />
              </span>
              <span className="checkss">
                Password must have a capital letter
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span className="checks ">
                <Checks />
              </span>
              <span className="checkss">
                Password must have a special character
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span className="checks ">
                <Checks />
              </span>
              <span className="checkss">Password must have a number.</span>
            </div>
          </div>

          <Form.Item className="mb-3">
            <Button className="btn mb-0" htmlType="submit">
              Reset Password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
