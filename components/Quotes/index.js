import React from 'react';
import QuoteTable from '../QuoteTable';

export default function Quotes() {
  return (
    <section className="quotes-page documents">
      <div className="container-fluid">
        <div className="row top-bar-space justify-content-end ">
          <div className="col-auto">
            <button className="our-btn">Get Free Quote</button>
          </div>
        </div>
        <div className="row">
          <QuoteTable from="quote" />
        </div>
      </div>
    </section>
  );
}
