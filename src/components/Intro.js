import { Steps } from 'intro.js-react';
import { setCookie, parseCookies } from 'nookies';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useRouter } from 'next/router';

function Intro({ steps }) {
  const [step, setStep] = useState(0);
  const router = useRouter();
  const { query } = router;

  const guideOptions = {
    nextLabel: 'Next',
    doneLabel: 'Done',
    positionPrecedence: ['top', 'bottom', 'bottom-middle-aligned', 'auto'],
    exitOnOverlayClick: false,
    disableInteraction: true,
    scrollToElement: false,
    overlayOpacity: 0.2,
  };

  const handleExit = () => {
    setCookie(null, 'hideTour', 'true', {
      maxAge: 9999 * 24 * 60 * 60,
      path: '/',
    });
  };

  const increaseSteps = (index) => {
    setStep(index);
  };

  const cookies = parseCookies();

  if (query.intro === 'false' || cookies.hideTour) {
    return null;
  }

  return (
    <Steps
      onExit={handleExit}
      onChange={increaseSteps}
      steps={steps}
      enabled={true}
      initialStep={step}
      options={guideOptions}
    />
  );
}

Intro.propTypes = {
  steps: PropTypes.array,
};

export default Intro;
