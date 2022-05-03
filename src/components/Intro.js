import { Steps } from 'intro.js-react';
import { setCookie, parseCookies } from 'nookies';

const steps = [
  {
    intro: 'Welcome to the Environment map for blockchain ecosystem!',
  },
  {
    element: '#nav',
    intro: 'This is your journey to learn how to create dApp',
  },
  {
    element: '#learn-section',
    intro: 'Each section has an expandable sections for you to explore',
  },
  {
    element: '#blockchains-section',
    intro: 'Here is your quick link to the most common blockchains',
  },
  {
    element: '#github',
    intro: 'The app is Opensource, so feel free to contribute too',
  },
];

const guideOptions = {
  nextLabel: 'Next',
  doneLabel: 'Done',
};

function Intro() {
  const handleExit = () => {
    setCookie(null, 'hideTour', 'true', {
      maxAge: 9999 * 24 * 60 * 60,
      path: '/',
    });
  };

  const cookies = parseCookies();

  if (!cookies.hideTour)
    return <Steps onExit={handleExit} steps={steps} enabled={true} initialStep={0} options={guideOptions} />;

  return null;
}

export default Intro;
