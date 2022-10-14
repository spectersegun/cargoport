import Link from 'next/link';
import React, { useState } from 'react';
import NavToggler from '../Vectors/NavToggler';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Collapse from 'react-bootstrap/Collapse';

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

          {/* <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li></li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </nav>
    </header>
  );
}
