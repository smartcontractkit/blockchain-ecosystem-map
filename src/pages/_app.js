import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import chapters from '@/data/chapters';
import '@/styles/globals.scss';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(router.query.activelink || '');

  const updateLink = (id) => {
    router.push({
      query: {
        activelink: id,
      },
    });
  };

  useEffect(() => {
    const { activelink, opened } = router.query;
    console.log(activelink);
    setActiveLink(activelink.replace('#', '') || '');
    document.querySelector(`h3#${activelink.replace('#', '')}`)?.scrollIntoView();
    if (opened) {
      // document.querySelector(`h4#${opened}`)?.scrollIntoView();
    }
  }, [router.query]);

  return (
    <>
      <Navbar activeLink={activeLink} chapters={chapters} updateActiveLink={updateLink} />
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
