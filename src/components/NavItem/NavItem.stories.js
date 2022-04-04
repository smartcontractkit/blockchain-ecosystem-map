import NavItem from './NavItem';
// import LearnIcon from '@/components/Icons/LearnIcon';
import LearnIcon from '@/icons/learn.svg';

export default {
  title: 'component/ Nav Item',
  component: NavItem,
  argTypes: {
    isActive: {
      control: 'boolean',
    },
  },
};

const Template = (args) => (
  <NavItem {...args}>
    <LearnIcon />
  </NavItem>
);

export const Default = Template.bind({});

Default.args = {
  text: 'Default',
  id: 'learn',
  isActive: false,
};
