import React from 'react';
import Header from '../../components/header/Header';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import Faq from '../../components/faq/Faq';
import Footer from '../../components/footer/Footer';
import Head from '../../components/head/Head';

function Home() {
  return (
    <>
      <Head>
        <Header />
      </Head>
      <Jumbotron/>
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
