import React from 'react';
import Image from 'next/image';
import QuotationHeader from '../QuotationHeader';

export default function AdminQuote() {
  return (
    <section className="quotation-page client-bg preview">
      <div className="row top-bar-space">
        <QuotationHeader />

        {/* <div className="row quotation-main">
          <div className="col-lg-12">
            <div className="quotation-charges" style={{ background: 'white' }}>
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
                </div>
              </div>

              <div className="charges-content">
                <div className="d-flex">
                  <div className="col" style={{ flexWrap: 'wrap' }}>
                    <h5>Shipping Charges</h5>
                    <h6>We found 4 shipping lines</h6>

                    <div className="col-12 d-flex flex-wrap">
                      <div className="quotation-charges-box-three quotation-charges-box">
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
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="quotation-charges">
          <div className="previews">
            <h5>Custom Brokage + Terminal Handling Costs</h5>
            <div className="d-flex flex-wrap">
              <div className="quotation-charges-box-three quotation-charges-box">
                <h5>Logigrains</h5>
                <p className="amount">N 150,000.00</p>
              </div>
            </div>
          </div>

          <div className="previews">
            <h5>Shipping Charges</h5>
            <div className="d-flex flex-wrap">
              <div className="quotation-charges-box-three quotation-charges-box">
                <h5>MAERSK</h5>
                <p className="amount">N 150,000.00</p>
              </div>
              <div className="quotation-charges-box-three quotation-charges-box">
                <h5>MAERSK</h5>
                <p className="amount">N 150,000.00</p>
              </div>
            </div>
          </div>

          <div className="previews">
            <h5>Inland Logistics</h5>
            <div className="d-flex flex-wrap">
              <div className="quotation-charges-box-three quotation-charges-box">
                <h5>Cargoport</h5>
                <p className="amount">N 150,000.00</p>
              </div>
            </div>
          </div>

          <div className="previews">
            <h5>Warehousing</h5>
            <div className="d-flex flex-wrap">
              <div className="quotation-charges-box-three quotation-charges-box">
                <h5>Cargoport</h5>
                <p className="amount">N 150,000.00</p>
              </div>
            </div>
          </div>

          <div className="previews">
            <h5>Warehousing</h5>
            <div className="d-flex flex-wrap">
              <div
                className="quotation-charges-box quotation-charges-box-one"
                style={{ border: '1.5px solid #D9D9D9' }}
              >
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

          <div className="previews">
            <h5>Trade Finance</h5>
            <div className="d-flex flex-wrap">
              <div className="quotation-charges-box-three quotation-charges-box">
                <h5>Cargoport</h5>
                <p className="amount">N 150,000.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
