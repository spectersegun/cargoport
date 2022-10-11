import Image from 'next/image';
import React from 'react';
import serviceTwo from '../../public/image/service-two.png';

export default function HomeSecondSec() {
  return (
    <section className="second-section">
      <div className="container">
        <div className="row justify-content-center top-service">
          <h3 className="">Our Services</h3>
          <h6 className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h6>
        </div>

        <div className="row justify-content-md-between">
          <div className="col-lg-auto order-1">
            <div className="service-img-wrapper">
              <Image
                src={'/image/service-one.png'}
                width={652}
                height={438}
                alt="services"
                objectFit="contain"
                quality={100}
                priority={true}
              />
            </div>
          </div>
          <div className="col-lg-5 services-des">
            <h5>Warehousing</h5>
            <p>
              We provide warehouse opportunity for handling and storing of goods
              before shipments takes place.
            </p>
          </div>
        </div>

        <div className="row ">
          <div className="col-lg-auto">
            <div className="service-img-wrapper">
              <Image
                src={'/image/service-two.png'}
                width={642}
                height={438}
                alt="services"
                objectFit="contain"
                quality={100}
                priority={true}
              />
            </div>
          </div>
          <div className="col-lg-5 services-des">
            <h5>Custom Brokage</h5>
            <p>
              We provide shipment clearance including import and export. Cargo
              port ensures that the items meet all the regulations, laws,
              packing and other requirement that are Mandated by law.
            </p>
          </div>
        </div>

        <div className="row justify-content-md-between">
          <div className="col-lg-auto order-1">
            <div className="service-img-wrapper">
              <Image
                src={'/image/service-three.png'}
                width={642}
                height={438}
                alt="services"
                objectFit="contain"
                quality={100}
                priority={true}
              />
            </div>
          </div>
          <div className="col-lg-5 services-des">
            <h5>Freight Forwarding</h5>
            <p>
              Cargo port ensure strategic logistics planning and execution for
              the international movement of goods.
            </p>
          </div>
        </div>

        <div className="row justify-content-md-between">
          <div className="col-lg-auto">
            <div className="service-img-wrapper">
              <Image
                src={'/image/service-four.png'}
                width={652}
                height={438}
                alt="services"
                objectFit="contain"
                quality={100}
                priority={true}
              />
            </div>
          </div>
          <div className="col-lg-5 services-des">
            <h5>Trucking</h5>
            <p>
              We provide conveyance of goods by truck from pickup to point of
              destination.
            </p>
          </div>
        </div>

        <div className="row justify-content-md-between">
          <div className="col-lg-auto order-1">
            <div className="service-img-wrapper">
              <Image
                src={'/image/service-five.png'}
                width={642}
                height={438}
                alt="services"
                objectFit="contain"
                quality={100}
                priority={true}
              />
            </div>
          </div>
          <div className="col-lg-5 services-des">
            <h5>Shipment Finance</h5>
            <p>
              Access the cash to capitalize on opportunity fast. Cover
              logistics, with funding that allows accounts for unpredictable
              shipments cycles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
