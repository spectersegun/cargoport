import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function QuoteWrapper({ children }) {
  return (
    <>
      <header className="header">
        <nav class="navbar ">
          <div class="container">
            <div className="col-auto navbar-brand">
              <Link href="/">Cargoport.</Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="quote-innner ">
        <div className="container ">{children}</div>
      </div>
    </>
  );
}
