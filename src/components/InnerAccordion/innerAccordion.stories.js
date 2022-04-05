import InnerAccordion from './InnerAccordion';
import React from 'react';

export default {
  title: 'components/Inner Accordion',
  component: InnerAccordion,
};

const Template = (args) => {
  const [isExpanded, setisExpanded] = React.useState(null);
  const id = 'default';
  const expandPanel = React.useCallback(
    (value) => {
      setisExpanded(isExpanded && isExpanded === value ? null : value);
    },
    [isExpanded]
  );
  return (
    <InnerAccordion {...args} expanded={isExpanded === id} expandToggle={expandPanel}>
      <p>
        Users are rewarded for the value they provide and can become co - owners in the products they use. Products can
        harness the intelligence of the crowd. Users are increasingly able to influence the scope of the product, and
        even participate in the product development. Organisations can increase transparency and meritocracy through
        public on - chain identities and reputation.
      </p>
    </InnerAccordion>
  );
};

export const Default = Template.bind({});

Default.args = {
  title: 'Default',
  id: 'default',
};
