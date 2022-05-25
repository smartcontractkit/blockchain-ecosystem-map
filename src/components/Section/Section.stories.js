import Section from './Section';
import { StateProvider } from '@/context/StateProvider';
import LearnIcon from '@/icons/learn.svg';

export default {
  title: 'Components/Section',
  component: Section,
};

const Template = (args) => (
  <StateProvider>
    <Section {...args}>
      {/* Some demo data */}
      <div id="hello">This is a div</div>
      <div id="hello2">And this is another div</div>
    </Section>
  </StateProvider>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Section title',
  id: 'section-id',
  Icon: LearnIcon,
  expandedIds: [],
  expandToggle: () => {},
};
