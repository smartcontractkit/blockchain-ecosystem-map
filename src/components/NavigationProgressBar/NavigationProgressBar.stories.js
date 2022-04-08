import NavigationProgressBar from './NavigationProgressBar';

export default {
  title: 'components/Navigation Progress Bar',
  component: NavigationProgressBar,
  argTypes: {
    progress: {
      control: 'number',
    },
  },
};

const Template = (args) => <NavigationProgressBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  progress: 0,
};
