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

export default function DashWrapper({ children, h3, tab }) {
  var asidepage = 1;
  if (tab) {
    asidepage = tab;
  }

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
              </>

              {asidepage == 2 ? (
                <li className="active">
                  <Link href="/dash-no-quote">
                    <span>
                      <AsideQuote color="second" />
                      Quotes
                    </span>
                  </Link>
                </li>
              ) : (
                <li className="">
                  <Link href="/dash-no-quote">
                    <span>
                      <AsideQuote />
                      Quotes
                    </span>
                  </Link>
                </li>
              )}

              {asidepage == 3 ? (
                <li className="active">
                  <Link href="/shipments">
                    <span>
                      <AsideShipments color="second" />
                      Shipments
                    </span>
                  </Link>
                </li>
              ) : (
                <li className="">
                  <Link href="/shipments">
                    <span>
                      <AsideShipments />
                      Shipments
                    </span>
                  </Link>
                </li>
              )}

              {asidepage == 4 ? (
                <li className="active">
                  <Link href="/trade-finance">
                    <span>
                      <AsideTrade color="second" />
                      Trade Finance
                    </span>
                  </Link>
                </li>
              ) : (
                <li className="">
                  <Link href="/trade-finance">
                    <span>
                      <AsideTrade />
                      Trade Finance
                    </span>
                  </Link>
                </li>
              )}

              {asidepage == 5 ? (
                <li className="active">
                  <Link href="/documents">
                    <span>
                      <AsideDocument color="second" />
                      Documents
                    </span>
                  </Link>
                </li>
              ) : (
                <li className="">
                  <Link href="/documents">
                    <span>
                      <AsideDocument />
                      Documents
                    </span>
                  </Link>
                </li>
              )}

              {asidepage == 6 ? (
                <li className="active">
                  <Link href="/settings">
                    <span>
                      <AsideSettings color="second" />
                      Settings
                    </span>
                  </Link>
                </li>
              ) : (
                <li className="">
                  <Link href="/settings">
                    <span>
                      <AsideSettings />
                      Settings
                    </span>
                  </Link>
                </li>
              )}
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
