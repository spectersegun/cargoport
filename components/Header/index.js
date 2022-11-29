import Link from 'next/link';
import React, { useState } from 'react';
import NavToggler from '../Vectors/NavToggler';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const getStarted = () => {
    router.push('/login');
  };

  return (
    <header className="header">
      <nav class="navbar ">
        <div class="container">
          <div className="col-auto navbar-brand">
            <Link href="/">Cargoport.</Link>
          </div>

          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <NavToggler />
          </button>

          <div className="col-auto top-links d-lg-flex d-none ">
            <ul className="d-flex mb-0 align-items-center">
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link href="/faq">FAQs</Link>
              </li>
              <li>
                <Link href="/">Track Request Status</Link>
              </li>
              <li>
                <Link href="/login">Sign In</Link>
              </li>
            </ul>
            <button className="get-started" onClick={() => getStarted()}>
              Get Started
            </button>
          </div>

          {/* <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            <NavToggler />
          </Button> */}
        </div>
      </nav>
    </header>
  );
}
