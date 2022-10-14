import React from 'react';
import SubHeader from '../QuoteWrapper/SubHeader';
import { Button, Form, Input, Radio, Select } from 'antd';
import QuestionMark from '../Vectors/QuestionMark';
import { useRouter } from 'next/router';

export default function QuoteStepFour() {
  const router = useRouter();
  const { Option } = Select;
  const { TextArea } = Input;

  const onFinish = values => {
    console.log('Success:', values);
    router.push('/quote-final-step');
  };

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <div className="">
        <ul className="d-flex px-0 list-progress justify-content-between">
          <li className="list-progress-item">1</li>
          <li className="list-progress-item">2</li>
          <li className="list-progress-item">3</li>
          <li className="list-progress-item active">4</li>
        </ul>
      </div>

      <div className="quotes">
        <div className="quote step-four">
          <SubHeader
            h4="Additional Services"
            h5="Let us know the additional services you need"
          />

          <Form
            onFinish={onFinish}
            name="rates"
            className="haulage-wrapper p-0"
          >
            <label>Do you need warehousing?</label>
            <Form.Item name="container">
              <Radio.Group name="warehousing" defaultValue={'undecided'}>
                <div className="row mx-0 checkboxs">
                  <div className="col">
                    <Radio value={'yes'}>Yes, I do</Radio>
                  </div>
                  <div className="col">
                    <Radio value={'no'}>No, i do not need it</Radio>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>

            <label>Duration (weeks) </label>
            <Form.Item name="Duration">
              <Input placeholder="Enter the duration" type="number" />
            </Form.Item>

            <label> Cargo pick-up date</label>
            <Form.Item name="Duration">
              <Input placeholder="dd-mm-yy" type="date" />
            </Form.Item>

            <label>Do you need Insurance?</label>
            <h6 className="learn-more text400">
              <QuestionMark />
              Click here to learn more about Insurance
            </h6>
            <Form.Item name="insurance">
              <Radio.Group name="insurance" defaultValue={'undecided'}>
                <div className="row mx-0 checkboxs">
                  <div className="col">
                    <Radio value={'yes'}>Yes, I do</Radio>
                  </div>
                  <div className="col">
                    <Radio value={'no'}>No, i do not need it</Radio>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>

            <label>Do you need Trade Finance?</label>
            <h6 className="learn-more text400">
              <QuestionMark />
              Click here to learn more about Insurance
            </h6>
            <Form.Item name="finance" className="mb-40">
              <Radio.Group name="finance" defaultValue={'undecided'}>
                <div className="row mx-0 checkboxs">
                  <div className="col">
                    <Radio value={'yes'}>Yes, I do</Radio>
                  </div>
                  <div className="col">
                    <Radio value={'no'}>No, i do not need it</Radio>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit">Proceed</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
