import Link from 'next/link';
import React from 'react';
import SubHeader from '../QuoteWrapper/SubHeader';
import { useRouter } from 'next/router';

import { Button, Checkbox, Form, Input, Upload, TextArea } from 'antd';
import UploadSvg from '../Vectors/UploadSvg';

export default function QuoteStepTwo({ dash }) {
  const router = useRouter();

  const { TextArea } = Input;

  const onFinish = values => {
    console.log('Success:', values);

    if (dash) {
      router.push('/dash-quote-step-three');
    } else {
      router.push('/quote-step-three');
    }
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
    <>
      <div className="">
        <ul className="d-flex px-0 list-progress justify-content-between">
          <li className="list-progress-item ">1</li>
          <li className="list-progress-item active">2</li>
          <li className="list-progress-item">3</li>
          <li className="list-progress-item ">4</li>
        </ul>
      </div>

      <div className="quotes">
        <div className="quote step-two">
          <SubHeader
            h4="Document"
            h5="Please upload the necessary document for your shipment"
          />
          <Form name="final step" onFinish={onFinish}>
            <label>Upload your NXP Form</label>
            <Form.Item
              layout="vertical"
              name="upload"
              className="quote-upload"
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
            <Form.Item name="NXP" className="step-two-check">
              <Checkbox onChange={onChange}>I do not have my NXP Form</Checkbox>
            </Form.Item>

            <label>Upload your PFI Form</label>
            <Form.Item
              layout="vertical"
              name="upload"
              className="quote-upload"
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
            <Form.Item name="PXI" className="step-two-check pb-2">
              <Checkbox onChange={onChange}>I do not have my PXI Form</Checkbox>
            </Form.Item>

            <button className="btn text800 mb-12" type="submit">
              Proceed
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}

QuoteStepTwo.dafaulProps = {
  dash: false,
};
