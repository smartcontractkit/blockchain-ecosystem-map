import { useState } from 'react';
import Navbar from '@/components/Navbar';
import chapters from '@/data/chapters';
import '@/styles/globals.scss';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  const [activelink] = useState('test');

  return (
    <>
      <DefaultSeo {...SEO} />
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
