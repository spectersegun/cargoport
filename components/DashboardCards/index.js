import React from 'react';
import CardOne from '../Vectors/DashCardOne';
import CardTwo from '../Vectors/DashCardTwo';
import CardThree from '../Vectors/DashCardThree';

export default function DashboardCards() {
  return (
    <div className="row dashboard-cards">
      <div className="col-md-4">
        <div className="card-details">
          <div className="col-auto">
            <h5>14</h5>
            <p>Total Shipments</p>
          </div>
          <div className="col-auto">
            <CardOne />
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card-details">
          <div className="col-auto">
            <h5>12</h5>
            <p>Total Quotes</p>
          </div>
          <div className="col-auto">
            <CardTwo />
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card-details">
          <div className="col-auto">
            <h5>20</h5>
            <p>Total Invoices</p>
          </div>
          <div className="col-auto">
            <CardThree />
          </div>
        </div>
      </div>
    </div>
  );
}
