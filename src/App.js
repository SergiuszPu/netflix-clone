import React from 'react';
import Faq from './components/home/faq/Faq';
import Footer from './components/home/footer/Footer';
import Jumbotron from './components/home/jumbotron/Jumbotron';
import Header from './components/home/header/Header';

function App() {
  return (
    <> 
      <Header />
      <Jumbotron/>
      <Faq />
      <Footer />
    </>
  );
}

export default App;
