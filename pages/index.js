// import Head from 'next/head'
// import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeSecondSec from '../components/HomeSecondSec';
import HomeThirdSec from '../components/HomeThirdSec';
import HomeFirstSec from '../components/HomeFirstSec';

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <Head title="Home" />

      <Header />
      <HomeFirstSec />
      <HomeSecondSec />
      <HomeThirdSec />

      <Footer />
    </div>
  );
}
