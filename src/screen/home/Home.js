import React from 'react';
import Header from '../../components/header/Header';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import Faq from '../../components/faq/Faq';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <>
      <Header />
      <Jumbotron/>
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
