import React from 'react';
import QuoteTable from '../QuoteTable';

export default function TotalInvoice({ from }) {
  return (
    <section className="quotes-page documents">
      <div className="container-fluid">
        <div className="row top-bar-space justify-content-end ">
          <h4 className="subHeader subHeader-2">Total Invoices - 10</h4>
        </div>
        <div className="row">
          <QuoteTable from={from} />
        </div>
      </div>
    </section>
  );
}
