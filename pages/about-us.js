import React from 'react';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Head from '../components/Head';

export default function aboutus() {
  return (
    <div>
      <Head title="about us" />
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
}
