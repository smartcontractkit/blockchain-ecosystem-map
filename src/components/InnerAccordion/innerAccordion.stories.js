import InnerAccordion from './InnerAccordion';

export default {
  title: 'components/Inner Accordion',
  component: InnerAccordion,
};

const Template = (args) => (
  <InnerAccordion {...args}>
    <p>Hello Accord</p>
  </InnerAccordion>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Default',
  id: 'default',
};
