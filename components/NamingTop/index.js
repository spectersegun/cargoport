import Link from 'next/link';
import React from 'react';

export default function NamingTop({ h4, p, span, butt, hrefs }) {
  return (
    <div className="row top-bar-space naming-top justify-content-between">
      <div className="col-sm-auto">
        <h4 className="">{h4}</h4>
        <p>
          {p} <span>{span}</span>
        </p>
      </div>

      {butt && (
        <Link href={hrefs}>
          <div className="col-sm-auto">
            <button className="our-btn">{butt}</button>
          </div>
        </Link>
      )}
    </div>
  );
}
