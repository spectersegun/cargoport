import Link from 'next/link';
import React from 'react';
import SubHeader from '../QuoteWrapper/SubHeader';
import { useRouter } from 'next/router';

import { Button, Checkbox, Form, Input, Upload, TextArea } from 'antd';
import UploadSvg from '../Vectors/UploadSvg';

export default function QuoteFinalStep() {
  const router = useRouter();
  const { TextArea } = Input;

  const onFinish = values => {
    console.log('Success:', values);
    router.push('/quote-submitted');
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

  return (
    <div className="quotes">
      <div className="quote">
        <SubHeader
          h4="Final Step"
          h5="Kindly fill the field below in order to get a trade finance"
        />
        <label>Upload Statement of Account</label>
        <Form name="final step" onFinish={onFinish}>
          <Form.Item
            layout="vertical"
            name="upload"
            className="quote-upload"
            rules={[{ required: true, message: 'Please input your username!' }]}
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

          <label>Enter BVN</label>
          <Form.Item
            name="bvn"
            rules={[{ required: true, message: 'Please input your BVN' }]}
            type="number"
            className="mb-32"
          >
            <Input placeholder="Enter your BVN here" type="number" />
          </Form.Item>

          <label>Office Address</label>
          <Form.Item
            name="address"
            rules={[{ required: true, message: 'Please input your Address' }]}
            className="mb-32"
          >
            <TextArea
              onChange={onChange}
              allowClear
              rows={3}
              placeholder="Enter your office address here"
            />
          </Form.Item>
          <button className="btn text800 mb-12" type="submit">
            Create an account
          </button>
        </Form>
      </div>
    </div>
  );
}
