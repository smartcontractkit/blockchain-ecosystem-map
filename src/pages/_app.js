import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import '@/styles/globals.scss';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import PropTypes from 'prop-types';
import useGoogleTagManager from '@/helpers/useGoogleTagManager';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [activeLink] = useState(router.query.activelink || '');

  useGoogleTagManager(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING);

  useEffect(() => {
    const { activelink, opened } = router.query;
    if (activelink) {
      document
        .querySelector(`h3#${activelink.replace('#', '')}`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (opened) {
      document.querySelector(`h4#${opened.replace('#', '')}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [router, router.query]);

  return (
    <>
      <Navbar activeLink={activeLink} />
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
