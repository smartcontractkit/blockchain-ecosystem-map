import Section from './Section';

export default {
  title: 'Components/Section',
  component: Section,
};

const Template = (args) => <Section {...args}> Hello world </Section>;

export const Default = Template.bind({});

Default.args = {
  title: 'Section title',
};
