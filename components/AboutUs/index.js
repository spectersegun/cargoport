import React from 'react';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-us-top">
        <div className="container">
          <div className="row justify-content-center">
            <h2>
              Cargoport is a business-to-business (B2B) freight forwarding and
              compehensive supply chain platform.
            </h2>

            <h5>
              We cover shipment cost costs with trading finance and is more
              coordinated for business trading with Africa by bringing the
              deployment process into a platform. Our use of technology makes it
              possible to drive transparency and efficiency making it easy for
              african businesses to trade across the world.
            </h5>
          </div>
        </div>
      </div>

      <div className="container meet-team">
        <div className="row justify-content-center">
          <h3>Meet The Team</h3>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h6>
        </div>

        <div className="row  meet-wrapper">
          <div className="col-lg-3 col-sm-6 meet">
            <div>
              <div>
                <Image
                  src={'/image/about-0.jpeg'}
                  width={295}
                  height={295}
                  alt="Chisom Azubuike"
                  objectFit="cover"
                  quality={100}
                  priority={true}
                  layout="responsive"
                />
              </div>
              <div>
                <h5>Chisom Azubuike</h5>
                <p>CEO / Co-Founder</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 meet">
            <div>
              <div>
                <Image
                  src={'/image/about-1.jpeg'}
                  width={295}
                  height={295}
                  alt="Aniefiok Reuben"
                  objectFit="cover"
                  quality={100}
                  priority={true}
                  layout="responsive"
                />
              </div>
              <div>
                <h5>Aniefiok Reuben</h5>
                <p>CTO / Co-Founder </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 meet">
            <div>
              <div>
                <Image
                  src={'/image/about-inec.jpeg'}
                  width={295}
                  height={295}
                  alt="hero"
                  objectFit="cover"
                  quality={100}
                  priority={true}
                  layout="responsive"
                />
              </div>
              <div>
                <h5>Damilere Atanda</h5>
                <p>Product Designer (Ui/Ux)</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 meet">
            <div>
              <div>
                <Image
                  src={'/image/about-specter.jpeg'}
                  width={295}
                  height={295}
                  alt="hero"
                  objectFit="cover"
                  quality={100}
                  priority={true}
                  layout="responsive"
                />
              </div>
              <div>
                <h5>Specter Oluwasegun</h5>
                <p>Front-end Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
