import Image from 'next/image';
import React from 'react';
import Facebook from '../Vectors/Facebook';
import Instagram from '../Vectors/Instagram';
import Twitter from '../Vectors/Twitter';

export default function BlogPost() {
  return (
    <section className="second-blog">
      <div>
        <div className="container ">
          <div className="row updates">
            <p>
              Business updates <span>Tuesday 09 August, 2014</span>
            </p>
            <h2>Cargoport: See what&#39;s new</h2>

            <div className="blog-image-wrapper">
              <Image
                src={'/image/second-blog-bg.png'}
                width={1240}
                height={510}
                alt="hero"
                objectFit="contain"
                quality={100}
                priority={true}
                layout="responsive"
              />
            </div>
          </div>
          <div className="row blog-details">
            <div className="col-md-auto order-md-0 order-1  socials ">
              <div className="row align-items-center">
                <div className="col-auto  ">
                  <div className="social-manager-dp">
                    <Image
                      src={'/image/blog-avatar.png'}
                      width={64}
                      height={64}
                      alt="hero"
                      objectFit="contain"
                      quality={100}
                      priority={true}
                      style={{
                        borderRadius: '50%',
                      }}
                      layout="responsive"
                    />
                  </div>
                </div>
                <div className="col ps-0">
                  <h6>Patricia Joy</h6>
                  <p>Social Media Manager</p>
                </div>
              </div>
              <div className="row">
                <span>SHARE THIS POST ON</span>
              </div>
              <div className="d-flex social-icons">
                <Facebook className="col-auto" />
                <Instagram className="col-auto" />
                <Twitter className="col-auto" />
              </div>
            </div>

            <div className=" col">
              <p>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pellentesque tincidunt dictum. Aliquam commodo lorem
                  quis eros facilisis, at pharetra sapien pharetra. Duis varius
                  auctor maximus. Phasellus vestibulum erat ac turpis eleifend
                  mollis. Praesent porta augue ut euismod eleifend. Proin id
                  ultricies augue. Phasellus varius nunc suscipit ultricies
                  faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nullam pellentesque tincidunt dictum. Aliquam commodo
                  lorem quis eros facilisis, at pharetra sapien pharetra. Duis
                  varius auctor maximus. Phasellus vestibulum erat ac turpis
                  eleifend mollis. Praesent porta augue ut euismod eleifend.
                  Proin id ultricies augue. Phasellus varius nunc suscipit
                  ultricies faucibus.
                </span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pellentesque tincidunt dictum. Aliquam commodo lorem
                  quis eros facilisis, at pharetra sapien pharetra. Duis varius
                  auctor maximus. Phasellus vestibulum erat ac turpis eleifend
                  mollis. Praesent porta augue ut euismod eleifend. Proin id
                  ultricies augue. Phasellus varius nunc suscipit ultricies
                  faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nullam pellentesque tincidunt dictum. Aliquam commodo
                  lorem quis eros facilisis, at pharetra sapien pharetra. Duis
                  varius auctor maximus. Phasellus vestibulum erat ac turpis
                  eleifend mollis. Praesent porta augue ut euismod eleifend.
                  Proin id ultricies augue. Phasellus varius nunc suscipit
                  ultricies faucibus. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nullam pellentesque tincidunt dictum. Aliquam
                  commodo lorem quis eros facilisis, at pharetra sapien
                  pharetra. Duis varius auctor maximus. Phasellus vestibulum
                  erat ac turpis eleifend mollis. Praesent porta augue ut
                  euismod eleifend. Proin id ultricies augue. Phasellus varius
                  nunc suscipit ultricies faucibus. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Nullam pellentesque tincidunt
                  dictum. Aliquam commodo lorem quis eros facilisis, at pharetra
                  sapien pharetra. Duis varius auctor maximus. Phasellus
                  vestibulum erat ac turpis eleifend mollis. Praesent porta
                  augue ut euismod eleifend. Proin id ultricies augue. Phasellus
                  varius nunc suscipit ultricies faucibus. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Nullam pellentesque
                  tincidunt dictum. Aliquam commodo lorem quis eros facilisis,
                  at pharetra sapien pharetra. Duis varius auctor maximus.
                  Phasellus vestibulum erat ac turpis eleifend mollis. Praesent
                  porta augue ut euismod eleifend. Proin id ultricies augue.
                  Phasellus varius nunc suscipit ultricies faucibus. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Nullam
                  pellentesque tincidunt dictum. Aliquam commodo lorem quis eros
                  facilisis, at pharetra sapien pharetra. Duis varius auctor
                  maximus. Phasellus vestibulum erat ac turpis eleifend mollis.
                  Praesent porta augue ut euismod eleifend. Proin id ultricies
                  augue. Phasellus varius nunc suscipit ultricies faucibus.
                </span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pellentesque tincidunt dictum. Aliquam commodo lorem
                  quis eros facilisis, at pharetra sapien pharetra. Duis varius
                  auctor maximus. Phasellus vestibulum erat ac turpis eleifend
                  mollis. Praesent porta augue ut euismod eleifend. Proin id
                  ultricies augue. Phasellus varius nunc suscipit ultricies
                  faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nullam pellentesque tincidunt dictum. Aliquam commodo
                  lorem quis eros facilisis, at pharetra sapien pharetra. Duis
                  varius auctor maximus. Phasellus vestibulum erat ac turpis
                  eleifend mollis. Praesent porta augue ut euismod eleifend.
                  Proin id ultricies augue. Phasellus varius nunc suscipit
                  ultricies faucibus.
                </span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pellentesque tincidunt dictum. Aliquam commodo lorem
                  quis eros facilisis, at pharetra sapien pharetra. Duis varius
                  auctor maximus. Phasellus vestibulum erat ac turpis eleifend
                  mollis. Praesent porta augue ut euismod eleifend. Proin id
                  ultricies augue. Phasellus varius nunc suscipit ultricies
                  faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nullam pellentesque tincidunt dictum. Aliquam commodo
                  lorem quis eros facilisis, at pharetra sapien pharetra. Duis
                  varius auctor maximus. Phasellus vestibulum erat ac turpis
                  eleifend mollis. Praesent porta augue ut euismod eleifend.
                  Proin id ultricies augue. Phasellus varius nunc suscipit
                  ultricies faucibus.
                </span>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
