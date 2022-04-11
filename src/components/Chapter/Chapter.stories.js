import Chapter from './Chapter';

export default {
  title: 'Components/Chapter',
  component: Chapter,
};

const Template = (args) => <Chapter {...args}>Some children</Chapter>;

export const Default = Template.bind({});
