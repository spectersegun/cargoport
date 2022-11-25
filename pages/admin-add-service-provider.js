import React from 'react';
import QuoteStepFour from '../components/QuoteStepFour';
import AdminDashWrapper from '../components/AdminDashWrapper';
import AdminAddServiceProvider from '../components/AdminAddServiceProvider';

export default function Adminaddserviceprovider() {
  return (
    <>
      <AdminDashWrapper tab={5} h3="Service Providers">
        <div className="quote-innner ">
          <div className="container">
            <AdminAddServiceProvider />
          </div>
        </div>
      </AdminDashWrapper>
    </>
  );
}
