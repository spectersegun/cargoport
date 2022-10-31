import React from 'react';
import SubHeader from '../QuoteWrapper/SubHeader';
import { Button, Form, Input, Radio, Select } from 'antd';
import { useRouter } from 'next/router';

export default function QuoteStepThree({ dash }) {
  const router = useRouter();
  const { Option } = Select;
  const { TextArea } = Input;

  const onFinish = values => {
    console.log('Success:', values);

    if (dash) {
      console.log('printing');
      router.push('/dash-quote-step-four');
    } else {
      router.push('/quote-step-four');
    }
  };

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <div className="">
        <ul className="d-flex px-0 list-progress justify-content-between">
          <li className="list-progress-item ">1</li>
          <li className="list-progress-item ">2</li>
          <li className="list-progress-item active">3</li>
          <li className="list-progress-item ">4</li>
        </ul>
      </div>

      <div className="quotes">
        <div className="quote step-three">
          <SubHeader h4="Location" h5="Select the location of your shipment" />

          <label>No of container(s) </label>
          <Form.Item name="noContainer">
            <Input placeholder="Enter number of containers" type="number" />
          </Form.Item>

          <label>Size of container</label>
          <Form
            onFinish={onFinish}
            name="rates"
            className="haulage-wrapper p-0"
          >
            <Form.Item name="container">
              <Radio.Group name="radiogroup" defaultValue={'port'}>
                <div className="row mx-0 checkboxs">
                  <div className="col">
                    <Radio value={'20 Feet'}>20 Feet</Radio>
                  </div>
                  <div className="col">
                    <Radio value={'40 Feet'}>40 feet</Radio>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>

            <label>Goods type</label>
            <Form.Item name="goodType">
              <Radio.Group name="radiogroup" defaultValue={'port'}>
                <div className="row mx-0 checkboxs">
                  <div className="col mb-3">
                    <Radio value={'Raw Materials'}>Raw Materials</Radio>
                  </div>
                  <div className="col mb-3">
                    <Radio value={'Agro Allied Products'}>
                      Agro Allied Products
                    </Radio>
                  </div>
                </div>
                <div className="row mx-0 checkboxs">
                  <div className="col">
                    <Radio value={'Solid Minerals'}>Solid Minerals</Radio>
                  </div>
                  <div className="col ">
                    <Radio value={'Finished Goods'}>Finished Goods</Radio>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>

            <label>Total value of goods (N) </label>
            <Form.Item name="goodsValue">
              <Input placeholder="Enter the value of goods" type="number" />
            </Form.Item>

            <label>Cargo Description</label>

            <Form.Item
              name="address"
              rules={[{ required: true, message: 'Please input your Address' }]}
              className="mb-32 pb-3 pb-sm-0"
            >
              <TextArea
                allowClear
                rows={3}
                placeholder="Enter cargo description"
              />
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
QuoteStepThree.dafaultProps = {
  dash: false,
};
