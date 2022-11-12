import React from 'react';
import CardOne from '../Vectors/DashCardOne';
import CardTwo from '../Vectors/DashCardTwo';
import CardThree from '../Vectors/DashCardThree';
import CardThreeAdmin from '../Vectors/CardThreeAdmin';
import Link from 'next/link';

export default function DashboardCards({ admin }) {
  console.log(admin);
  return (
    <>
      {admin == true ? (
        <div className="row dashboard-cards">
          <div className="col-md-4">
            <div className="card-details">
              <div className="col-auto">
                <h5>14</h5>
                <p>Total Ongoing Shipments</p>
              </div>
              <div className="col-auto">
                <CardOne />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <Link href={'/admin-orders'}>
              <div className="card-details">
                <div className="col-auto">
                  <h5>12</h5>
                  <p>New Orders</p>
                </div>
                <div className="col-auto">
                  <CardTwo />
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-4">
            <Link href={'admin-total-registered'}>
              <div className="card-details">
                <div className="col-auto">
                  <h5>1,234,567</h5>
                  <p>Total Registered Members</p>
                </div>
                <div className="col-auto">
                  <CardThreeAdmin />
                </div>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="row dashboard-cards">
          <div className="col-md-4">
            <Link href="/shipments">
              <div className="card-details">
                <div className="col-auto">
                  <h5>14</h5>
                  <p>Total Shipments</p>
                </div>
                <div className="col-auto">
                  <CardOne />
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-4">
            <Link href={'/quotes'}>
              <div className="card-details">
                <div className="col-auto">
                  <h5>12</h5>
                  <p>Total Quotes</p>
                </div>
                <div className="col-auto">
                  <CardTwo />
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-4">
            <Link href={'/total-invoices'}>
              <div className="card-details">
                <div className="col-auto">
                  <h5>20</h5>
                  <p>Total Invoices</p>
                </div>
                <div className="col-auto">
                  <CardThree />
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
