import { useState } from 'react';
import Navbar from '@/components/Navbar';
import chapters from '@/data/chapters';
import '@/styles/globals.scss';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  const [activelink] = useState('test');

  return (
    <>
      <Navbar activeLink={activelink} chapters={chapters} />
      <main>
        <Component {...pageProps} chapters={chapters} />
      </main>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
