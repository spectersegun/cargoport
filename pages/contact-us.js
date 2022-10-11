import React from 'react';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Head from '../components/Head';

export default function contactus() {
  return (
    <div>
      <Head title="about us" />
      <Header />
      <ContactUs />
      <Footer />
    </div>
  );
}
