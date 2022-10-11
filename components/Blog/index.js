import React from 'react';
import { Button, Form, Input } from 'antd';

export default function Blog() {
  const onFinish = values => {
    console.log('Success:', values);
  };

  return (
    <section>
      <div className="blog-hero">
        <div className="container ">
          <div className="row">
            <h2>Highlights and Top News From Cargoport.</h2>
            <p>Be the first to get updates and announcements from Cargoport!</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto pe-lg-0">
              <Form name="contact us" onFinish={onFinish}>
                <Form.Item
                  name="Email Address"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Email Address!',
                    },
                  ]}
                >
                  <Input type="email" placeholder="Enter your email address" />
                </Form.Item>
              </Form>
            </div>
            <div className="col-auto">
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
