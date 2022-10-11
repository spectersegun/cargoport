import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';
import Link from 'next/link';
import Thick from '../Vectors/Thick';

export default function Reset() {
  const [showAlert, setShowAlert] = useState(false);
  const onFinish = values => {
    console.log('Success:', values);
    setShowAlert(true);
  };

  return (
    <>
      {showAlert && (
        <h6 className="aleert text800 fade-in-2s ">
          {' '}
          <Thick /> Check your email. We have sent instructions to reset your
          password.
        </h6>
      )}

      <div className="login-forms">
        <div className="row">
          <h4>Password Reset</h4>
          <p className="form-info">
            Please enter your email address. We will send you an email to reset
            your password.
          </p>
        </div>
        <div className="row">
          <Form name="login" onFinish={onFinish}>
            <Form.Item
              name="email"
              className="mb-40"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input type="email" placeholder="Email address" />
            </Form.Item>

            <Form.Item className="mb-0">
              <Button className="btn mb-0" htmlType="submit">
                Send Email
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
