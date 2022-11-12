import Image from 'next/image';
import Link from 'next/link';
import React, { children } from 'react';
import AsideDashboard from '../Vectors/AsideDashboard';
import AsideDocument from '../Vectors/AsideDocument';
import AsideLogout from '../Vectors/AsideLogout';
import AsideQuote from '../Vectors/AsideQuote';
import AsideService from '../Vectors/AsideService';
import AsideSettings from '../Vectors/AsideSettings';
import AsideShipments from '../Vectors/AsideShipments';
import AsideTrade from '../Vectors/AsideTrade';

export default function AdminDashWrapper({ children, h3, tab }) {
  var asidepage = 1;
  if (tab) {
    asidepage = tab;
  }

  return (
    <div className="dashboard admin">
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
                    <Link href="/admin-dashboard">
                      <span>
                        <AsideDashboard color="white" />
                        Dashboard
                      </span>
                    </Link>
                  </li>
                ) : (
                  <li className="">
                    <Link href="/admin-dashboard">
                      <span>
                        <AsideDashboard color="#A0A0A0" />
                        Dashboard
                      </span>
                    </Link>
                  </li>
                )}
              </>

              {asidepage == 2 ? (
                <li className="active">
                  <Link href="/admin-orders">
                    <span>
                      <AsideQuote color="white" />
                      Orders
                    </span>
                  </Link>
                </li>
              ) : (
                <li className="">
                  <Link href="/admin-orders">
                    <span>
                      <AsideQuote color="#A0A0A0" />
                      Orders
                    </span>
                  </Link>
                </li>
              )}

              {asidepage == 3 ? (
                <li className="active">
                  <Link href="/admin-dashboard-shipments">
                    <span>
                      <AsideShipments color="white" />
                      Shipments
                    </span>
                  </Link>
                </li>
              ) : (
                <li className="">
                  <Link href="/admin-dashboard-shipments">
                    <span>
                      <AsideShipments color="#A0A0A0" />
                      Shipments
                    </span>
                  </Link>
                </li>
              )}

              {asidepage == 4 ? (
                <li className="active">
                  <Link href="/trade-finance">
                    <span>
                      <AsideTrade color="white" />
                      Trade Finance
                    </span>
                  </Link>
                </li>
              ) : (
                <li className="">
                  <Link href="/trade-finance">
                    <span>
                      <AsideTrade color="#A0A0A0" />
                      Trade Finance
                    </span>
                  </Link>
                </li>
              )}

              {asidepage == 5 ? (
                <li className="active">
                  <Link href="#">
                    <span>
                      <AsideService color="white" />
                      Service Providers
                    </span>
                  </Link>
                </li>
              ) : (
                <li className="">
                  <Link href="/#">
                    <span>
                      <AsideService color="#A0A0A0" />
                      Service Providers
                    </span>
                  </Link>
                </li>
              )}

              {asidepage == 6 ? (
                <li className="active">
                  <Link href="/admin-settings">
                    <span>
                      <AsideSettings color="white" />
                      Settings
                    </span>
                  </Link>
                </li>
              ) : (
                <li className="">
                  <Link href="/admin-settings">
                    <span>
                      <AsideSettings color="#A0A0A0" />
                      Settings
                    </span>
                  </Link>
                </li>
              )}
            </ul>
            <div className="bottom">
              <button>
                <>
                  <AsideLogout color="#DA2828" />
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

AdminDashWrapper.defaultProps = {
  h3: 'Dashboard',
};
