import Navbar from '@/components/Navbar';
import '@/styles/globals.scss';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import PropTypes from 'prop-types';
import useGoogleTagManager from '@/helpers/useGoogleTagManager';

function MyApp({ Component, pageProps }) {
  useGoogleTagManager(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING);

  return (
    <>
      <Navbar />
      <DefaultSeo {...SEO} />
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
