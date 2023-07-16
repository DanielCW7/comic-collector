// _app.js

import React from 'react';
import '../styles/globals.css'; // Import global styles

function MyApp({ Component, pageProps }) {
  // Any additional custom logic or data fetching can be done here

  return <Component {...pageProps} />;
}


export default MyApp;
