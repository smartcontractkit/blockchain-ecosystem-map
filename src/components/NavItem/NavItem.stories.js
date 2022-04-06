import NavItem from './NavItem';
import Learn from '@/icons/learn.svg';

export default {
  title: 'component/ Nav Item',
  component: NavItem,
  argTypes: {
    isSelected: {
      control: 'boolean',
    },
  },
};

const Template = (args) => (
  <NavItem {...args}>
    <Learn /> Default
  </NavItem>
);

export const Default = Template.bind({});

Default.args = {
  href: '#learn',
  isSelected: false,
};
