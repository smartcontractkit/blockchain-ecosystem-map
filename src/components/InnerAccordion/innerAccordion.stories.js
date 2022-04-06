import InnerAccordion from './InnerAccordion';
import React from 'react';

export default {
  title: 'components/Inner Accordion',
  component: InnerAccordion,
};

const Template = (args) => {
  const [isExpanded, setisExpanded] = React.useState(null);

  const expandPanel = React.useCallback(
    (value) => {
      setisExpanded(isExpanded && isExpanded === value ? null : value);
    },
    [isExpanded]
  );
  return (
    <>
      <InnerAccordion
        {...args}
        title="Default"
        id="default"
        expanded={isExpanded === 'default'}
        expandToggle={expandPanel}
      >
        <p>
          Users are rewarded for the value they provide and can become co - owners in the products they use. Products
          can harness the intelligence of the crowd. Users are increasingly able to influence the scope of the product,
          and even participate in the product development. Organisations can increase transparency and meritocracy
          through public on - chain identities and reputation.
        </p>
      </InnerAccordion>
      <InnerAccordion {...args} title="Test" id="test" expanded={isExpanded === 'test'} expandToggle={expandPanel}>
        <p>
          Accordion widgets require some accessibility considerations to make them useful for everyone.In this article
          we explain what you need to do to create accessible, inclusive accordion components.
        </p>
      </InnerAccordion>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  title: 'Default',
  id: 'default',
};
