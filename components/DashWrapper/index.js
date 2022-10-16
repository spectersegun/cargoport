import Image from 'next/image';
import Link from 'next/link';
import React, { children } from 'react';
import AsideDashboard from '../Vectors/AsideDashboard';
import AsideDocument from '../Vectors/AsideDocument';
import AsideLogout from '../Vectors/AsideLogout';
import AsideQuote from '../Vectors/AsideQuote';
import AsideSettings from '../Vectors/AsideSettings';
import AsideShipments from '../Vectors/AsideShipments';
import AsideTrade from '../Vectors/AsideTrade';

export default function DashWrapper({ children, h3 }) {
  var asidepage = 1;
  return (
    <div className="dashboard">
      <header>
        <nav>
          <div className="row justify-content-between align-items-center mx-0">
            <h4 className="col-auto ">{h3}</h4>

            <div className="col-auto d-flex align-items-center dp">
              <div className="">
                <Image
                  src={'/image/dp.png'}
                  alt="dp"
                  width={32}
                  height={32}
                  objectFit="contain"
                  quality={100}
                  priority={true}
                />
              </div>
              <h6 className="text800">Atanda Damilare</h6>
            </div>
          </div>
        </nav>
      </header>
      <aside>
        <div className="d-none d-md-block ">
          <div className=" d-flex align-items-center flex-column">
            <h3>Cargoport.</h3>
            <ul>
              <>
                {asidepage == 1 ? (
                  <li className="active">
                    <Link href="/home">
                      <span>
                        <AsideDashboard color="second" />
                        Dashboard
                      </span>
                    </Link>
                  </li>
                ) : (
                  <li className="">
                    <Link href="/home">
                      <span>
                        <AsideDashboard />
                        Dashboard
                      </span>
                    </Link>
                  </li>
                )}
                {/* <li className="">
                  <Link href="/home">
                    <>
                      {aside == 1 ? (
                        <AsideDashboard color="second" />
                      ) : (
                        <AsideDashboard />
                      )}
                      Dashboard
                    </>
                  </Link>
                </li> */}
              </>

              <li className="">
                <Link href="/dash-no-quote">
                  <span>
                    <AsideQuote />
                    Quotes
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <>
                    <AsideShipments />
                    Shipments
                  </>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <>
                    <AsideTrade />
                    Trade Finance
                  </>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <>
                    <AsideDocument />
                    Documents
                  </>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <>
                    <AsideSettings />
                    Settings
                  </>
                </Link>
              </li>
            </ul>
            <div className="bottom">
              <button>
                <>
                  <AsideLogout />
                  Logout
                </>
              </button>
            </div>
          </div>
        </div>
      </aside>
      <main>{children}</main>
    </div>
  );
}

DashWrapper.defaultProps = {
  h3: 'Dashboard',
};
