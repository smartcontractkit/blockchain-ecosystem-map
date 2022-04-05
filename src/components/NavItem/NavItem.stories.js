import NavItem from './NavItem';
import Learn from '@/icons/learn.svg';

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
    <Learn />
  </NavItem>
);

export const Default = Template.bind({});

Default.args = {
  text: 'Default',
  id: 'learn',
  isActive: false,
};
