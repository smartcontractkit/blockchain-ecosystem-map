import { useState } from 'react';
import Navbar from '@/components/Navbar';
import '@/styles/globals.scss';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  const [activelink] = useState('test');

  return (
    <>
      <Navbar activeLink={activelink} />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
