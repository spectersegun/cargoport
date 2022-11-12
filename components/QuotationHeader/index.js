import React from 'react';
import Ship from '../Vectors/Ship';

export default function QuotationHeader() {
  return (
    <div className="col-12 quotation-header">
      <div className="d-flex top justify-content-between align-items-center">
        <div className="col-auto">
          <h5 className="text800">NGAPP</h5>
        </div>
        <div className="col linning first">
          <span />
        </div>
        <div className="col-auto px-sm-1">
          <Ship />
        </div>
        <div className="col linning second">
          <span />
        </div>
        <div className="col-auto">
          <h5 className="text800">NLRTM</h5>
        </div>
      </div>
      <div className="d-flex justify-content-between ">
        <p className="col-auto">Lagos Apapa Nigeria</p>
        <p className="col-auto">Zuid-Holland Rotterdam Netherlands</p>
      </div>
      <div className="linning-two"></div>
      <div className="">
        <div
          className="d-flex lower-details justify-content-between"
          style={{ flexWrap: 'wrap' }}
        >
          <div className="col-sm-auto col-auto">
            <h6>NO OF CONTAINERS:</h6>
            <h5>2</h5>
          </div>
          <div className="col-sm-auto col-auto">
            <h6>SIZE OF CONTAINERS:</h6>
            <h5>40 FEET</h5>
          </div>
          <div className="col-sm-auto col-auto">
            <h6>WAREHOUSE:</h6>
            <h5>3 WEEKS</h5>
          </div>
          <div className="col-sm-auto col-auto">
            <div>
              <h6>GOODS TYPE:</h6>
              <h5>Solid Minerals</h5>
            </div>
          </div>
          <div className="col-sm-auto col-auto">
            <h6>TOTAL VALUE OF GOODS:</h6>
            <h5>N 5,000,000</h5>
          </div>
          <div className="col-sm-auto col-auto d-block d-sm-none">
            <div style={{ visibility: 'hidden' }}>
              <h6>WAREHOUSE:</h6>
              <h5>3 WEEKS</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
