import Link from 'next/link';
import React from 'react';
import SubHeader from '../QuoteWrapper/SubHeader';
import { useRouter } from 'next/router';

import { Button, Checkbox, Form, Input, Upload, Select } from 'antd';
import UploadSvg from '../Vectors/UploadSvg';

export default function AdminAddServiceProvider() {
  const router = useRouter();

  const { TextArea } = Input;
  const { Option } = Select;

  const onFinish = values => {
    console.log('Success:', values);
    router.push('/dash-quote-step-three');
  };

  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    accept: '.png, .jpg, .pdf',
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
    // defaultFileList: [
    //   {
    //     uid: '1',
    //     name: 'xxx.png',
    //     status: 'done',
    //     response: 'Server Error 500', // custom error message to show
    //     url: 'http://www.baidu.com/xxx.png',
    //   },
    //   {
    //     uid: '2',
    //     name: 'yyy.png',
    //     status: 'done',
    //     url: 'http://www.baidu.com/yyy.png',
    //   },
    //   {
    //     uid: '3',
    //     name: 'zzz.png',
    //     status: 'error',
    //     response: 'Server Error 500', // custom error message to show
    //     url: 'http://www.baidu.com/zzz.png',
    //   },
    // ],
  };

  const onChange = e => {
    // console.log('Change:', e.target.value);
  };

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <div className="quotes add-service">
        <div className="quote step-two">
          <SubHeader h4="Add New Service Provider" />
          <Form
            name="final step"
            onFinish={onFinish}
            className="haulage-wrapper p-0"
          >
            <label className="text500">Name of provider</label>
            <Form.Item name="noContainer">
              <Input
                placeholder="Enter the name of the service provider here"
                type="text"
              />
            </Form.Item>
            <label className="text500">Service Category</label>
            <Form.Item name="from">
              <Select
                defaultValue="Select the service provided"
                style={{ width: '100%', maxWidth: '100%' }}
                onChange={handleChange}
              >
                <Option value="Logigrains">Logigrains</Option>
                <Option value="MAERSK">MAERSK</Option>
                <Option value="Cargoport">Cargoport</Option>
                <Option value="Zenith Insurance">Zenith Insurance</Option>
                <Option value="NSIA Insurance">NSIA Insurance</Option>
                <Option value="Trade Finance">Trade Finance</Option>
              </Select>
            </Form.Item>

            <label>Upload logo (optional)</label>
            <Form.Item
              layout="vertical"
              name="upload"
              className="quote-upload mb-40"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Upload {...props}>
                <div className="d-flex justify-center flex-column align-items-center">
                  <UploadSvg />
                  <p>
                    <span>Click to upload</span> a file or drag and drop (PDF up
                    to 5MB)
                  </p>
                </div>
              </Upload>
            </Form.Item>

            <button className="btn text800 mb-12" type="submit">
              Add Service Provider
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}
