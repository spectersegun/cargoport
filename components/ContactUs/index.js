import React from 'react';
import Contact from '../../components/Vectors/Contact';
import Contact2 from '../../components/Vectors/Contact2';
import Contact3 from '../../components/Vectors/Contact3';

import { Button, Form, Input } from 'antd';

export default function ContactUs() {
  const { TextArea } = Input;

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onChange = e => {
    console.log('Change:', e.target.value);
  };

  return (
    <section className="contact-us">
      <div className="container">
        <div className="row contact-hero justify-content-center">
          <h2>Contact Us</h2>
          <h5>
            Lets&#39;s start something great today! Get in touch with one of the
            team members
          </h5>
        </div>
        <div className="row justify-content-center major-contact">
          <div className="col-auto d-flex">
            <div>
              <Contact />
            </div>
            <h6>+2348038277977</h6>
          </div>
          <div className="col-auto d-flex">
            <div>
              <Contact2 />
            </div>
            <h6>No 5 Igboukwu Street, Coker, Lagos State.</h6>
          </div>
          <div className="col-auto d-flex">
            <div>
              <Contact3 />
            </div>
            <h6>hello@cargoport.trade@gmail.com</h6>
          </div>
        </div>
        <div className="send-message row justify-content-center align-items-center">
          <div className="col-auto division"></div>
          <div className="col-auto ">
            <h4>Send Us A Message</h4>
          </div>
          <div className="col-auto division"></div>
        </div>
        <div className="form row">
          <Form name="contact us" onFinish={onFinish}>
            <Form.Item
              name="Full Name"
              rules={[
                { required: true, message: 'Please input your Full Name!' },
              ]}
              onChange={onChange}
            >
              <Input placeholder="Full Name" />
            </Form.Item>
            <Form.Item
              name="Email Address"
              rules={[
                { required: true, message: 'Please input your Email Address!' },
              ]}
              onChange={onChange}
            >
              <Input type="email" placeholder="Email Address" />
            </Form.Item>
            <Form.Item
              name="Phone Number"
              rules={[
                { required: true, message: 'Please input your Phone Number!' },
              ]}
              onChange={onChange}
            >
              <Input placeholder="Phone Number" type="number" />
            </Form.Item>

            <Form.Item
              name="message"
              rules={[
                { required: true, message: 'Please input your message!' },
              ]}
            >
              <TextArea
                onChange={onChange}
                allowClear
                rows={4}
                placeholder="Write your message here"
              />
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit">Send Message</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
}
