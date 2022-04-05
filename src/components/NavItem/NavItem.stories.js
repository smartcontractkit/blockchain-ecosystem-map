import NavItem from './NavItem';
import Learn from '@/icons/learn.svg';

export default {
  title: 'components/ Nav Item',
  component: NavItem,
  argTypes: {
    isSelected: {
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
  isSelected: false,
};
