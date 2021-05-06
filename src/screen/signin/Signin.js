import React from 'react';
import Footer from '../../components/footer/Footer';
import Head from '../../components/head/Head';
import Login from '../../components/login/Login';

function Signin() {
  return (
    <div>
      <Head>
        <Login/>
      </Head>
      <Footer />
    </div>
  );
}

export default Signin;
