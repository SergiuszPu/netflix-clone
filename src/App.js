import React from 'react';
import Faq from './components/faq/Faq';
import Footer from './components/footer/Footer';
import Jumbotron from './components/jumbotron/Jumbotron';
import Header from './components/header/Header';

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
