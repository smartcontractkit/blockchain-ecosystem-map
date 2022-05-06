import { Steps } from 'intro.js-react';
import { setCookie, parseCookies } from 'nookies';
import { useEffect, useState } from 'react';

const guideOptions = {
  nextLabel: 'Next',
  doneLabel: 'Done',
  positionPrecedence: ['center'],
  scrollPadding: -2,
};

function Intro() {
  const [steps, setSteps] = useState([
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
    function regulateSteps() {
      if (window.screen.width < 1276) {
        setSteps((prevState) => prevState.filter((step) => step.element !== '#github'));
      } else {
        if (steps.current.length === 4) {
          setSteps((prevState) =>
            prevState.push({
              element: '#github',
              intro: 'The app is Opensource, so feel free to contribute too',
            })
          );
        }
      }
    }

    regulateSteps();

    window.addEventListener(
      'resize',
      function () {
        /* In the future for responsiveness if needed we can check for screen width to know which rough value can be added */
        regulateSteps();
      },
      true
    );
  }, []);

  if (!cookies.hideTour) {
    console.log(steps);
    return <Steps onExit={handleExit} steps={steps} enabled={true} initialStep={0} options={guideOptions} />;
  }

  return null;
}

export default Intro;
