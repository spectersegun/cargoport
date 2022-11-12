import React from 'react';
import ShipmentType from '../ShipmentType';
import SummaryDetailsQuote from '../SummaryDetailsQuote';
import AdditionalDetailsAdmin from '../AdditionalDetailsAdmin';
import CargoDetails from '../CargoDetails';
import ShipmentsDetailsDocuments from '../ShipmentsDetailsDocuments';
import Link from 'next/link';

export default function AdminQuoteSummary({ from }) {
  return (
    <section className="client-bg quote-summary-page">
      <div className="container-fluid">
        <div className="row top-bar-space align-items-end justify-content-between">
          <h5 className="quote-by col-auto">
            Quote by: <span className="person">Atanda Damilare</span>
          </h5>

          <h4 className="subHeader col-auto">Shipment ID: 12345678</h4>

          <div className="col-auto">
            {from == 'confirm' ? (
              <Link href="/admin-quote">
                <button className="our-btn our-btn-white">View Quote</button>
              </Link>
            ) : (
              <Link href="/admin-prepare-quotation">
                <button className="our-btn">Prepare Quotation</button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="container-fluid mt-4 pt-3">
        <div className="row shipments-details-wrapper">
          <div className="col-lg-6">
            <ShipmentType />
            <CargoDetails />
          </div>
          <div className="col-lg-6">
            <AdditionalDetailsAdmin />
            <ShipmentsDetailsDocuments />
          </div>
        </div>
        <div className="row justify-content-center mt-4 mt-md-0">
          <div className="col-auto">
            <Link href="/admin-prepare-quotation">
              <button className="our-btn">Prepare Quotation</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
