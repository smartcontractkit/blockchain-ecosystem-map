import { Steps } from 'intro.js-react';

const steps = [
  // {
  //   element: '.selector1',
  //   intro: 'test 1',
  //   position: 'right',
  //   tooltipClass: 'myTooltipClass',
  //   highlightClass: 'myHighlightClass',
  // },
  {
    // element: '#nav',
    intro: 'test 2',
  },
  // {
  //   element: '.selector3',
  //   intro: 'test 3',
  // },
];

function Intro() {
  const handleExit = () => {
    console.log('exit');
  };

  // const Steps = dynamic(() => import {Steps} from 'intro.js-react', {
  //   ssr: false,
  // });

  return (
    <Steps
      onExit={handleExit}
      steps={steps}
      enabled={true}
      initialStep={0}
      // options={guideOptions}
    />
  );
}

export default Intro;
