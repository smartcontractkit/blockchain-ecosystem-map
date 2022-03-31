import Colors from './Colors';

export default {
  title: 'colors/color templates',
  component: Colors,
};

const Template = (args) => <Colors {...args} />;

export const Default = Template.bind({});
