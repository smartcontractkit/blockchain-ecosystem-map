import { Steps } from 'intro.js-react';
import { setCookie, parseCookies } from 'nookies';
import { useEffect, useRef } from 'react';

// const steps = [
//   {
//     intro: 'Welcome to the Environment map for blockchain ecosystem!',
//   },
//   {
//     element: '#nav',
//     intro: 'This is your journey to learn how to create dApp',
//   },
//   {
//     element: '#learn-section',
//     intro: 'Each section has an expandable sections for you to explore',
//   },
//   {
//     element: '#blockchains-section',
//     intro: 'Here is your quick link to the most common blockchains',
//   }
// ];

const guideOptions = {
  nextLabel: 'Next',
  doneLabel: 'Done',
};

function Intro() {
  const steps = useRef([
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
  ]);
  const handleExit = () => {
    setCookie(null, 'hideTour', 'true', {
      maxAge: 9999 * 24 * 60 * 60,
      path: '/',
    });
  };

  const cookies = parseCookies();

  useEffect(() => {
    // if (window.screen < 1276) {
    //   steps.current = steps.current.filter((step) => step.element !== '#github')
    // }
    //   window.addEventListener(
    //     'resize',
    //     function () {
    //       /* In the future for responsiveness if needed we can check for screen width to know which rough value can be added */
    //       if (window.screen < 1276) {
    //         steps.current = steps.current.filter((step) => step.element !== '#github')
    //       }
    //     },
    //     true
    //   );
  }, []);

  if (!cookies.hideTour)
    return <Steps onExit={handleExit} steps={steps.current} enabled={true} initialStep={0} options={guideOptions} />;

  return null;
}

export default Intro;
