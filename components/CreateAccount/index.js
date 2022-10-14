import { Button, Checkbox, Form, Input } from 'antd';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CreateAccount() {
  const router = useRouter();

  const onFinish = values => {
    console.log('Success:', values);
    router.push('/otp');
  };

  return (
    <div className="login-forms">
      <div className="row">
        <h4>Create an account</h4>
        <p className="form-info">
          Kindly fill the fields below to create an account.
        </p>
      </div>
      <div className="row">
        <Form name="login" onFinish={onFinish}>
          <Form.Item
            name="FirstName"
            rules={[
              {
                required: true,
                message: 'Please input your first name!',
              },
            ]}
          >
            <Input placeholder="First Name" />
          </Form.Item>

          <Form.Item
            name="LastName"
            rules={[
              {
                required: true,
                message: 'Please input your last name!',
              },
            ]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input type="email" placeholder="Email address" />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            className="penalt"
            rules={[
              {
                required: true,
                message: 'Please input your Business Phone Number!',
              },
            ]}
          >
            <Input placeholder="Business Phone Number" type="number" />
          </Form.Item>

          <p className="forget text-start">
            By proceeding you agree with our{' '}
            <Link href="#" className="white">
              Terms and Conditions
            </Link>
          </p>

          <Form.Item>
            <Button className="btn" htmlType="submit">
              Proceed
            </Button>
          </Form.Item>

          <p className="form-footer-p">
            Already have an account? <Link href="/login">Sign In here</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
