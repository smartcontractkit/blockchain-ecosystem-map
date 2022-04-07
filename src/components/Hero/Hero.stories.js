import Hero from './Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
