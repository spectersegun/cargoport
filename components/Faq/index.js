import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default function Faq() {
  const { Search } = Input;
  const onSearch = value => console.log(value);

  const suffix = <SearchOutlined />;

  return (
    <section className="faq">
      <div className=" faq-top ">
        <div className="container">
          <div className="row">
            <h2>Frequently Asked Questions (FAQs)</h2>
            <p>
              Our FAQ will help you find answers to your questions quickly and
              easily, without needing to contact us.
            </p>
          </div>
        </div>
      </div>

      <div className="faq-main">
        <div className="container">
          <div className="row ">
            <div className="col-12 search">
              <Search
                onSearch={onSearch}
                allowClears
                placeholder="Search FAQ"
                prefix={suffix}
              />
            </div>
            <div className="col-12 question">
              <h4>How does freight forwarding work?</h4>
              <p>
                Freight forwarders coordinate the shipment of goods from one
                destination to another using different carriers.
              </p>
            </div>
            <div className="col-12 question">
              <h4>
                Why is it profitable to use cargo port freight forwarding
                services?
              </h4>
              <p>
                Here are three factors which makes cargo port services helpful:
                Cost-effective, No custom hassle, additional services (eg
                shipment tracking, trucking, insurance, etc).
              </p>
            </div>
            <div className="col-12 question">
              <h4>How can I know how much is cargo port fees/charges?</h4>
              <p>
                Click on the get quote button and fill the following
                information, and get quotation in 1 minute.
              </p>
            </div>
            <div className="col-12 question">
              <h4>How can I choose the right freight forwarding company?</h4>
              <p>
                Cargo port offers great features compared to other competitors,
                examples of these features are great expertise, a widespread
                network, customer support, certification and licenses and
                competitive services.
              </p>
            </div>
          </div>
          <div className="row justify-content-center faq-bottom">
            <div className="col-auto">
              <h5>Unable to find what you were looking for?</h5>
              <h6>
                Please get in touch if there is anything in particular you want
                to learn more about or if you have any inquiries that we
                haven&#39;t addressed. We&#39;ll make an effort to respond as
                quickly as we can.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
