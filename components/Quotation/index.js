import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Switch } from 'antd';
import QuotationHeader from '../QuotationHeader';

export default function Quotation() {
  const onChange = checked => {
    console.log(`switch to ${checked}`);
  };

  return (
    <section className="quotation-page client-bg">
      <div className="container-fluid">
        <div className="row top-bar-space">
          <QuotationHeader />
        </div>

        <div className="row quotation-main">
          <div className="col-lg-7">
            <div className="quotation-charges">
              <div className="charges-content">
                <div className="d-flex">
                  <div className="col" style={{ flexWrap: 'wrap' }}>
                    <h5>Custom Brokage + Terminal Handling Costs</h5>
                    <h6>CBT Provided by Logigrains</h6>

                    <div className="quotation-charges-box quotation-charges-box-one">
                      <div className="logo-wrapper">
                        <Image
                          src={'/image/logigrains.png'}
                          width={64}
                          height={25}
                          alt="logigrains"
                          objectFit="contain"
                          quality={100}
                          priority={true}
                        />
                      </div>
                      <p className="logo-name">Logigrains</p>
                    </div>
                  </div>
                  <div className="col-auto price">
                    <div className="switch"></div>
                    <h5>N 200,000.00</h5>
                    <h6>Per Container</h6>
                  </div>
                </div>
              </div>

              <div className="charges-content">
                <div className="d-flex">
                  <div className="col" style={{ flexWrap: 'wrap' }}>
                    <h5>Shipping Charges</h5>
                    <h6>We found 4 shipping lines</h6>

                    <div className="col-12 d-flex flex-wrap">
                      <div className="quotation-charges-box-two quotation-charges-box">
                        <h5>MAERSK</h5>
                        <p className="amount">N 150,000.00</p>
                      </div>
                      <div className="quotation-charges-box-three quotation-charges-box">
                        <h5>HAPAG LLOYD</h5>
                        <p className="amount">N 150,000.00</p>
                      </div>
                      <div className="quotation-charges-box-three quotation-charges-box">
                        <h5>CMA CGM</h5>
                        <p className="amount">N 150,000.00</p>
                      </div>
                      <div className="quotation-charges-box-three quotation-charges-box">
                        <h5>OOCL</h5>
                        <p className="amount">N 150,000.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto price">
                    <div className="switch"></div>
                    <h5>N 200,000.00</h5>
                    <h6>Per Container</h6>
                  </div>
                </div>
              </div>

              <div className="charges-content">
                <div className="d-flex">
                  <div className="col" style={{ flexWrap: 'wrap' }}>
                    <h5>Inland Logistics</h5>
                    <h6>Inland Logistics provided by Cargoport.</h6>

                    <div className="quotation-charges-box quotation-charges-box-one">
                      <p className="only">Cargoport.</p>
                    </div>
                  </div>
                  <div className="col-auto price">
                    <div className="switch">
                      <Switch size="small" defaultChecked onChange={onChange} />
                    </div>
                    <h5>N 200,000.00</h5>
                  </div>
                </div>
              </div>

              <div className="charges-content">
                <div className="d-flex">
                  <div className="col" style={{ flexWrap: 'wrap' }}>
                    <h5>Warehousing</h5>
                    <h6>Warehousing is provided by cargoport</h6>

                    <div className="quotation-charges-box quotation-charges-box-one">
                      <p className="only">Cargoport.</p>
                    </div>
                  </div>
                  <div className="col-auto price">
                    <div className="switch">
                      <Switch size="small" defaultChecked onChange={onChange} />
                    </div>
                    <h5>N 200,000.00</h5>
                    <h6>Per Container</h6>
                  </div>
                </div>
              </div>

              <div className="charges-content">
                <div className="d-flex">
                  <div className="col" style={{ flexWrap: 'wrap' }}>
                    <h5>Insurance</h5>
                    <h6>We found 2 options for insurance</h6>

                    <div className="col-12 d-flex flex-wrap">
                      <div className="quotation-charges-box quotation-charges-box-one">
                        <div className="logo-wrapper text-center">
                          <Image
                            src={'/image/zenith-logo.png'}
                            width={37}
                            height={12}
                            alt="zenith-logo"
                            objectFit="contain"
                            quality={100}
                            priority={true}
                          />
                          <p className="company-name">Zenith Insurance</p>
                          <p className="amount">N 24,670.00</p>
                        </div>
                      </div>

                      <div
                        className="quotation-charges-box quotation-charges-box-one"
                        style={{ border: '1.5px solid #D9D9D9' }}
                      >
                        <div className="logo-wrapper text-center">
                          <Image
                            src={'/image/nsia-insurance.png'}
                            width={39}
                            height={16}
                            alt="zenith-logo"
                            objectFit="contain"
                            quality={100}
                            priority={true}
                          />
                          <p className="company-name">NSIA Insurance</p>
                          <p className="amount">N 35,670.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto price">
                    <div className="switch">
                      <Switch size="small" defaultChecked onChange={onChange} />
                    </div>
                    <h5>N 200,000.00</h5>
                  </div>
                </div>
              </div>

              <div className="charges-content">
                <div className="d-flex">
                  <div className="col" style={{ flexWrap: 'wrap' }}>
                    <h5>Trade Finance</h5>
                    <h6>Trade Finance provided by Cargoport.</h6>

                    <div className="quotation-charges-box quotation-charges-box-one">
                      <p className="only">Cargoport.</p>
                    </div>
                  </div>
                  <div className="col-auto price">
                    <div className="switch">
                      <Switch size="small" defaultChecked onChange={onChange} />
                    </div>
                    <h5>N 200,000.00</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 d-md-block d-none">
            <div className="d-flex justify-content-end flex-wrap">
              <div className="col-auto ">
                <Link href="/invoice">
                  <button className="our-btn ">Proceed To Payment</button>
                </Link>
              </div>
              <div className="col-auto ">
                <button className="our-btn our-btn-white">
                  Print Quotation
                </button>
              </div>
            </div>
            <div className="total-quote">
              <div className="top d-flex align-items-center justify-content-between">
                <h5 className="col-auto">Total Quote</h5>
                <h5 className="col-auto">N 5,000,000.00</h5>
              </div>

              <div className="total-quote-main">
                <div className="d-flex justify-content-between content">
                  <div className="col-auto">
                    <h6 className="outfont14">Custom Brokage + THC</h6>
                    <div className="logo-wrapper">
                      <Image
                        src={'/image/logigrains.png'}
                        width={64}
                        height={25}
                        alt="logigrains"
                      />
                    </div>
                    <p className="logo-name">Logigrains</p>
                  </div>
                  <div className="col-auto">
                    <h5>N 200,000.00</h5>
                  </div>
                </div>

                <div className="d-flex justify-content-between content">
                  <div className="col-auto">
                    <h6>Shipping Charges</h6>
                    <p className="text800">MAERSK</p>
                  </div>
                  <div className="col-auto">
                    <h5>N 200,000.00</h5>
                  </div>
                </div>

                <div className="d-flex justify-content-between content">
                  <div className="col-auto">
                    <h6>Inland Logistics</h6>
                    <p className="text800">Cargoport.</p>
                  </div>
                  <div className="col-auto">
                    <h5>N 200,000.00</h5>
                  </div>
                </div>

                <div className="d-flex justify-content-between content">
                  <div className="col-auto">
                    <h6>Warehousing</h6>
                    <p className="text800">Cargoport.</p>
                  </div>
                  <div className="col-auto">
                    <h5>N 200,000.00</h5>
                  </div>
                </div>

                <div className="d-flex justify-content-between content">
                  <div className="col-auto">
                    <h6 className="outfont14">Custom Brokage + THC</h6>
                    <div className="logo-wrapper">
                      <Image
                        src={'/image/zenith-logo.png'}
                        width={64}
                        height={25}
                        alt="logigrains"
                      />
                    </div>
                    <p className="logo-name">Logigrains</p>
                  </div>
                  <div className="col-auto">
                    <h5>N 200,000.00</h5>
                  </div>
                </div>

                <div className="d-flex justify-content-between content">
                  <div className="col-auto">
                    <h6>Trade Finance</h6>
                    <p className="text800">Cargoport.</p>
                  </div>
                  <div className="col-auto">
                    <h5>N 200,000.00</h5>
                  </div>
                </div>

                <div className="d-flex justify-content-between content">
                  <div className="col-auto">
                    <h6>Service Charge</h6>
                    <p className="text800">Cargoport.</p>
                  </div>
                  <div className="col-auto">
                    <h5>N 200,000.00</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex d-md-none align-items-center justify-content-between base-total">
          <h5 className="col-auto">Total Quote</h5>
          <h5 className="col-auto">N 5,000,000.00</h5>
        </div>

        <div className="row justify-content-center mt-40">
          <div className="col-sm-auto px-0 pe-sm-3">
            <Link href="/invoice">
              <button className="our-btn">Proceed To Payment</button>
            </Link>
          </div>
          <div className="col-sm-auto px-0">
            <button className="our-btn our-btn-white">Print Quotation</button>
          </div>
        </div>
      </div>
    </section>
  );
}
