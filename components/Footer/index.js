import React from 'react';
import Link from 'next/link';
import FooterPay from '../Vectors/FooterPay';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <h3>Be in charge of your supply chain</h3>
        <div className="row justify-content-center  explain">
          <div className="col-sm-auto">
            <button className="btn ">Ship with Cargoport</button>
          </div>
          <div className="col-sm-auto">
            <button className="btn hiworks">
              {' '}
              <FooterPay className="me-2" /> See how it works
            </button>
          </div>
        </div>

        <div className="row mid-sec">
          <div className="col-auto">
            <h4>Cargoport.</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>

            <div className="row">
              <div className="col">
                <input
                  type="email"
                  placeholder="Email address"
                  className="px-3"
                />
              </div>
              <div className="col-sm-auto">
                <button className="btn">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="row justify-content-between footer-listing">
              <div className="col-sm-auto col-6 ">
                <h5>Company</h5>
                <ul>
                  <li>
                    <Link href="about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQs</Link>
                  </li>
                  <li>
                    <Link href="blog">Blog</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-auto col-6 ">
                <h5>Legal</h5>
                <ul>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Terms &#38; Conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Cookie Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-auto col-6 ">
                <h5>Follow</h5>
                <ul>
                  <li>
                    <Link href="#">LinkedIn</Link>
                  </li>
                  <li>
                    <Link href="#">Twitter</Link>
                  </li>
                  <li>
                    <Link href="#">Instagram</Link>
                  </li>
                  <li>
                    <Link href="#">Facebook</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-auto col-6 ">
                <h5>Contact</h5>
                <ul>
                  <li>
                    <Link href="#">+234 812 3456 789</Link>
                  </li>
                  <li>
                    <Link href="#"> support@cargoport.com</Link>
                  </li>
                  <li>
                    <Link href="#">cargohelp@cargoport.com</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <small>© Copyright 2022 Cargoport. All rights reserved</small>
        </div>
      </div>
    </footer>
  );
}
