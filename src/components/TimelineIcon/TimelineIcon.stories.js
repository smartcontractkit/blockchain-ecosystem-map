import TimelineIcon from './TimelineIcon';
import Openbook from '@/icons/open-book.svg';

export default {
  title: 'components/Timeline Icon',
  component: TimelineIcon,
  argTypes: {
    isActive: {
      control: 'boolean',
    },
  },
};

const Template = (args) => (
  <TimelineIcon {...args}>
    <Openbook />
  </TimelineIcon>
);

export const Default = Template.bind({});

Default.args = {
  isActive: false,
};
