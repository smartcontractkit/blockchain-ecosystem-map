import { TAGS } from './data';
import WelcomeSection from './WelcomeSection';

const tagOptions = Object.keys(TAGS);

export default {
  title: 'component/ Welcome Section',
  component: WelcomeSection,
  argTypes: {
    tag: {
      control: {
        type: 'select',
        options: tagOptions,
      },
    },
  },
};

const Template = (args) => <WelcomeSection {...args} />;

export const Default = Template.bind({});

Default.args = {
  tag: tagOptions[0],
};
