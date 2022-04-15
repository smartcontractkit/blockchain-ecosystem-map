import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import chapters from '@/data/chapters';
import '@/styles/globals.scss';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import PropTypes from 'prop-types';
import useGoogleTagManager from '@/helpers/useGoogleTagManager';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(router.query.activelink || '');

  useGoogleTagManager(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING);

  useEffect(() => {
    const { activelink, opened } = router.query;
    if (activelink) {
      setActiveLink(activelink.replace('#', '') || '');
      document.querySelector(`h3#${activelink.replace('#', '')}`)?.scrollIntoView(true);
    }
    if (opened) {
      document.querySelector(`h4#${opened.replace('#', '')}`)?.scrollIntoView(true);
    }
  }, [router, router.query]);

  return (
    <>
      <Navbar activeLink={activeLink} chapters={chapters} />
      <DefaultSeo {...SEO} />
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
