import React from 'react';
import QuotationHeader from '../QuotationHeader';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Minus from '../Vectors/Minus';
import Plus from '../Vectors/Plus';
import { Button, Form, Input, Select, Space } from 'antd';

export default function QuotationForms({ header }) {
  const { Option } = Select;

  const [form] = Form.useForm();
  const onFinish = values => {
    console.log('Received values of form:', values);
  };
  const handleChange = () => {
    form.setFieldsValue({
      sights: [],
    });
  };
  const items = ['MTN', 'GLO', 'AIRTEL'];

  return (
    <div className="col-12 select-service-provider">
      <p>{header}</p>

      <div className="d-flex align-items-start top-list" id="myList">
        <div className="col">
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, curValues) =>
              prevValues.area !== curValues.area ||
              prevValues.sights !== curValues.sights
            }
          >
            {() => (
              <Form.Item
                name={['sight']}
                rules={[
                  {
                    required: true,
                    message: 'Missing sight',
                  },
                ]}
              >
                <Select
                  style={{
                    minWidth: 150,
                  }}
                >
                  {items.map(item => (
                    <Option key={item} value={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            )}
          </Form.Item>
        </div>

        <div className="col">
          <Form.Item
            name={['price']}
            rules={[
              {
                required: true,
                message: 'Missing price',
              },
            ]}
          >
            <Input placeholder="Input Amount here" />
          </Form.Item>
        </div>
        <button
          col-auto
          onClick={() => {
            document.getElementById('myList').remove();
          }}
        >
          <Minus />
        </button>
      </div>

      <Form.List name="sights">
        {(fields, { add, remove }) => (
          <>
            {fields.map(field => (
              <Space key={field.key} align="baseline" className="d-flex">
                <div className="col-md">
                  <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, curValues) =>
                      prevValues.area !== curValues.area ||
                      prevValues.sights !== curValues.sights
                    }
                  >
                    {() => (
                      <Form.Item
                        {...field}
                        name={[field.name, 'sight']}
                        rules={[
                          {
                            required: true,
                            message: 'Missing sight',
                          },
                        ]}
                      >
                        <Select
                          style={{
                            minWidth: 150,
                          }}
                        >
                          {items.map(item => (
                            <Option key={item} value={item}>
                              {item}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                    )}
                  </Form.Item>
                </div>

                <div className="col-md">
                  <Form.Item
                    {...field}
                    name={[field.name, 'price']}
                    rules={[
                      {
                        required: true,
                        message: 'Missing price',
                      },
                    ]}
                  >
                    <Input placeholder="Input Amount here" />
                  </Form.Item>
                </div>

                <div className="col-auto">
                  <button onClick={() => remove(field.name)}>
                    <Minus />
                  </button>
                </div>
              </Space>
            ))}

            <Form.Item className="add">
              <Button type="dashed" onClick={() => add()} block icon={<Plus />}>
                Add sights
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      {/* button fuction to be added to general on finish */}
      {/* <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item> */}
    </div>
  );
}
