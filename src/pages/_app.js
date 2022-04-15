import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import '@/styles/globals.scss';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import PropTypes from 'prop-types';
import useGoogleTagManager from '@/helpers/useGoogleTagManager';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useGoogleTagManager(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING);

  useEffect(() => {
    const opened = router.query.opened;
    if (opened) {
      document.querySelector(`h4#${opened}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [router.query.opened]);

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
