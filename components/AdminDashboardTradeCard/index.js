import React from 'react';
import CardOne from '../Vectors/DashCardOne';
import CardTwo from '../Vectors/DashCradFour';
import CardThreeAdmin from '../Vectors/CardThreeAdmin';
import Link from 'next/link';

export default function AdminDashboardTradeCard() {
  return (
    <>
      <div className="row dashboard-cards top-space-bar">
        <div className="col-md-4">
          <Link href={'#'}>
            <div className="card-details">
              <div className="col-auto">
                <h5>$ 1,234,567.00</h5>
                <p>Total Outstanding Payments</p>
              </div>
              <div className="col-auto">
                <CardTwo />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link href={'#'}>
            <div className="card-details">
              <div className="col-auto">
                <h5>123</h5>
                <p>Total Trade Finance Shipments</p>
              </div>
              <div className="col-auto">
                <CardOne />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link href={'#'}>
            <div className="card-details">
              <div className="col-auto">
                <h5>20</h5>
                <p>Ongoing Trade Finance Shipments</p>
              </div>
              <div className="col-auto">
                <CardOne bg="#307460" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
