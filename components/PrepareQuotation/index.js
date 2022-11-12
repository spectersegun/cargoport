import React from 'react';
import QuotationHeader from '../QuotationHeader';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Minus from '../Vectors/Minus';
import Plus from '../Vectors/Plus';
import { Button, Form, Input, Select, Space } from 'antd';
import QuotationForms from './QuotationForms';
import Link from 'next/link';

const { Option } = Select;

export default function PrepareQuotation() {
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
    <section className="quotation-page client-bg">
      <div className="container-fluid">
        <div className="row top-bar-space">
          <QuotationHeader />
        </div>
        <div className="row">
          <p className="assign">
            Assign Service providers to services as apprioprate
          </p>
          <Form
            form={form}
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            autoComplete="off"
          >
            <QuotationForms header="Custom Brokage + Terminal Handling Costs" />
            <QuotationForms header="Shipping Charges" />
            <QuotationForms header="Inland Logistics" />
            <QuotationForms header="Warehousing" />
            <QuotationForms header="Insurance" />
            <QuotationForms header="Trade Finance (Interest on trade finance is 7%)" />
            <QuotationForms header="Service Charge (Always for Cargoport)" />
          </Form>
        </div>
        <div className="row">
          <div className="col-auto">
            <Link href="/admin-preview-quotation">
              <button className=" our-btn">Send Quotation</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
