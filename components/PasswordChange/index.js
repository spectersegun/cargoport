import { Button, Form, Input } from 'antd';
import React from 'react';
import Link from 'next/link';
import Checks from '../Vectors/Checks';

export default function PasswordChange({ onOk }) {
  const onFinish = values => {
    console.log('Success:', values);
    onOk();
  };

  return (
    <div
      className="login-forms"
      style={{ background: 'white', borderColor: 'white' }}
    >
      <div className="row">
        <Form name="login" onFinish={onFinish}>
          <Form.Item
            name="oldPassword"
            className=""
            rules={[
              { required: true, message: 'Please Enter your old password!' },
            ]}
          >
            <Input.Password placeholder="Enter your old password" />
          </Form.Item>

          <Form.Item
            name="newPassword"
            className=""
            rules={[
              { required: true, message: 'Please Enter your new password!' },
            ]}
          >
            <Input.Password placeholder="Enter your new password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            className=""
            rules={[
              { required: true, message: 'Please input your new password!' },
            ]}
          >
            <Input.Password placeholder="Confirm your new password" />
          </Form.Item>

          <div className="d-flex flex-column validatee ">
            <div className="d-flex align-items-center">
              <span className="checks ">
                <Checks borderColor={'#EEEEEE'} />
              </span>
              <span className="checkss">
                Password must be 8 or more characters long
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span className="checks ">
                <Checks borderColor={'#EEEEEE'} />
              </span>
              <span className="checkss">
                Password must have a capital letter
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span className="checks ">
                <Checks borderColor={'#EEEEEE'} />
              </span>
              <span className="checkss">
                Password must have a special character
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span className="checks ">
                <Checks borderColor={'#EEEEEE'} />
              </span>
              <span className="checkss">Password must have a number.</span>
            </div>
          </div>

          <Form.Item className="mb-3">
            <Button
              className="btn mb-0 our-btn"
              htmlType="submit"
              style={{ width: '187px' }}
            >
              Confirm Password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
