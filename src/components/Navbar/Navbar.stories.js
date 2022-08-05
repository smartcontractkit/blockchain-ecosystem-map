import Navbar from './Navbar';
import { StateProvider } from '@/context/StateProvider';

export default {
  title: 'components/Navbar',
  component: Navbar,
};

const Template = (args) => (
  <StateProvider>
    <Navbar {...args} />
  </StateProvider>
);

export const Default = Template.bind({});

Default.args = {
  activeLink: 'secure',
};
