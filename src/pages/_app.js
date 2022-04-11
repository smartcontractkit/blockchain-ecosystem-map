import Navbar from '@/components/Navbar';
import chapters from '@/data/chapters';
import '@/styles/globals.scss';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
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
