import { Button, Form, Input } from 'antd';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  const onFinish = values => {
    console.log('Success:', values);
    router.push('/home');
  };

  return (
    <div className="login-forms">
      <div className="row">
        <h4>Sign in to Cargoport</h4>
        <p className="form-info">
          Enter your email address and password below to sign in.
        </p>
      </div>
      <div className="row">
        <Form name="login" onFinish={onFinish}>
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
            name="password"
            className="penalt"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <p className="forget">
            <Link href="/reset">Forgot Password?</Link>
          </p>

          <Form.Item>
            <Button className="btn" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>

          <p className="form-footer-p">
            New to Cargoport.?{' '}
            <Link href="/create-account">Create an account here</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
