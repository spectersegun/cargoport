import React from 'react';
import { Form, Input, Tabs, Pagination } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const news = [
  {
    id: 0,
    img: '/image/blog-post.png',
    header: "Cargoport: See what's new",
    time: 'Tuesday 09 August, 2014',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 1,
    img: '/image/blog-post.png',
    header: "Cargoport: See what's new",
    time: 'Tuesday 09 August, 2014',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    img: '/image/blog-post.png',
    header: "Cargoport: See what's new",
    time: 'Tuesday 09 August, 2014',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default function Blog() {
  const onFinish = values => {
    console.log('Success:', values);
  };

  return (
    <section>
      <div className="blog-hero">
        <div className="container ">
          <div className="row">
            <h2>Highlights and Top News From Cargoport.</h2>
            <p>Be the first to get updates and announcements from Cargoport!</p>
          </div>
          <div className="row justify-content-center ">
            <div className="col-auto pe-lg-0">
              <Form name="contact us" onFinish={onFinish}>
                <Form.Item
                  name="Email Address"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Email Address!',
                    },
                  ]}
                >
                  <Input type="email" placeholder="Enter your email address" />
                </Form.Item>
              </Form>
            </div>
            <div className="col-auto">
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="tabs-header">
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="All" key="1">
            <div className="container inner-tab">
              {news.map((item, index) => (
                <div className=" row" key={index}>
                  <div
                    className={index % 2 === 0 ? 'col-lg-5' : 'col-lg-5 right'}
                  >
                    <Image
                      src={'/image/blog-post.png'}
                      width={505}
                      height={241}
                      alt="blog-post"
                      objectFit="contain"
                      quality={100}
                      priority={true}
                    />
                  </div>
                  <div className="col-lg-7 blog-news">
                    <h3 className="text800">{item.header}</h3>
                    <p className="posts ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eius mod tempor incididunt ut labore et dolore
                      magna aliqua. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                      {item.id / 2}
                    </p>
                    <div className="row align-items-center bottom">
                      <p className="col-auto">
                        Business updates <span>Tuesday 09 August, 2014</span>
                      </p>
                      <div className="col-auto ">
                        <Link href="#">Read more</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Business updates" key="2">
            <div className="container inner-tab">
              {news.map((item, index) => (
                <div className=" row" key={index}>
                  <div
                    className={index % 2 === 0 ? 'col-lg-5' : 'col-lg-5 right'}
                  >
                    <Image
                      src={'/image/blog-post.png'}
                      width={505}
                      height={241}
                      alt="blog-post"
                      objectFit="contain"
                      quality={100}
                      priority={true}
                    />
                  </div>
                  <div className="col-lg-7 blog-news">
                    <h3 className="text800">{item.header}</h3>
                    <p className="posts ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eius mod tempor incididunt ut labore et dolore
                      magna aliqua. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                      {item.id / 2}
                    </p>
                    <div className="row  bottom">
                      <p className="col-auto">
                        Business updates <span>Tuesday 09 August, 2014</span>
                      </p>
                      <div className="col-auto ">
                        <Link href="#">Read more</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Cargo ships" key="3">
            <div className="container inner-tab">
              {news.map((item, index) => (
                <div className=" row" key={index}>
                  <div
                    className={index % 2 === 0 ? 'col-lg-5' : 'col-lg-5 right'}
                  >
                    <Image
                      src={'/image/blog-post.png'}
                      width={505}
                      height={241}
                      alt="blog-post"
                      objectFit="contain"
                      quality={100}
                      priority={true}
                    />
                  </div>
                  <div className="col-lg-7 blog-news">
                    <h3 className="text800">{item.header}</h3>
                    <p className="posts ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eius mod tempor incididunt ut labore et dolore
                      magna aliqua. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                      {item.id / 2}
                    </p>
                    <div className="row  bottom">
                      <p className="col-auto">
                        Business updates <span>Tuesday 09 August, 2014</span>
                      </p>
                      <div className="col-auto ">
                        <Link href="#">Read more</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Trade Financing" key="4">
            <div className="container inner-tab">
              {news.map((item, index) => (
                <div className=" row" key={index}>
                  <div
                    className={index % 2 === 0 ? 'col-lg-5' : 'col-lg-5 right'}
                  >
                    <Image
                      src={'/image/blog-post.png'}
                      width={505}
                      height={241}
                      alt="blog-post"
                      objectFit="contain"
                      quality={100}
                      priority={true}
                    />
                  </div>
                  <div className="col-lg-7 blog-news">
                    <h3 className="text800">{item.header}</h3>
                    <p className="posts ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eius mod tempor incididunt ut labore et dolore
                      magna aliqua. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                      {item.id / 2}
                    </p>
                    <div className="row  bottom">
                      <p className="col-auto">
                        Business updates <span>Tuesday 09 August, 2014</span>
                      </p>
                      <div className="col-auto ">
                        <Link href="#">Read more</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>
      <div className="container">
        <div className="row justify-content-center mb-5 paging">
          <div className="col-auto">
            {/* <Pagination defaultCurrent={1} total={50} /> */}
            <Pagination size="medium" total={50} />
          </div>
        </div>
      </div>
    </section>
  );
}
