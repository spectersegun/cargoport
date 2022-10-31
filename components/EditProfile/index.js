import React from 'react';
import Image from 'next/image';
import UploadDP from '../Vectors/UploadDP';
import { Button, Checkbox, Form, Input } from 'antd';
import { useRouter } from 'next/router';

export default function EditProfile() {
  const router = useRouter();

  const onFinish = values => {
    console.log('Success:', values);
    router.push('/settings');
  };

  return (
    <section className="profile-page">
      <div className="container-fluid top-bar-space">
        <div className="row align-items-center">
          <div className="col-auto">
            <div className="dp-wrapper">
              <Image
                src={'/image/dp.png'}
                alt="dp"
                width={144}
                height={144}
                objectFit="cover"
                quality={100}
                priority={true}
              />
            </div>
          </div>
          <div className="col-auto">
            <p className="upload-text">
              <UploadDP /> Click to upload a new photo
            </p>
          </div>
        </div>
        <div className="row mt-3 pt-3 pb-5 mb-4" style={{ maxWidth: '904px' }}>
          <Form
            layout="vertical"
            name="edit profile"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            className="col-lg-10 edit-form"
          >
            <div className="row">
              <div className="col-md-6">
                <Form.Item label="First Name" name="FirstName">
                  <Input placeholder="First Name" />
                </Form.Item>
              </div>
              <div className="col-md-6">
                <Form.Item label="Last Name" name="LastName">
                  <Input placeholder="Last Name" />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Form.Item label="Company Name" name="CompanyName">
                  <Input placeholder="Company Name" />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Form.Item label="Company Address" name="CompanyAddress">
                  <Input placeholder="Company Address" />
                </Form.Item>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <Form.Item
                  label="Email Address"
                  name="EmailAddress"
                  rules={[
                    {
                      type: 'email',
                    },
                  ]}
                >
                  <Input placeholder="Email Address" />
                </Form.Item>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <Form.Item label="Phone Number" name="PhoneNumber">
                  <Input placeholder="Phone Address" type="number" />
                </Form.Item>
              </div>
            </div>

            <Form.Item>
              <Button
                // type="primary"
                htmlType="submit"
                className="our-btn"
                style={{ width: '158px' }}
              >
                Save Changes
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
}
