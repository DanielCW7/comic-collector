// _app.js

import React from 'react';
import '../styles/globals.css'; // Import global styles
import Nav from '@/components/nav';
import Footer from '@/components/footer';

function MyApp({ Component, pageProps }) {
  // Any additional custom logic or data fetching can be done here

  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}


export default MyApp;
