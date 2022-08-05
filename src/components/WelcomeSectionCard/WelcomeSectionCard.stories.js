import WelcomeSectionCard from './WelcomeSectionCard';

import chapters from '@/data/chapters';
import { countItems, getItems } from '@/helpers/getCardData';

const { get_started } = chapters;
const [{ title, data, Icon }] = get_started;

export default {
  title: 'components/ Welcome Section Card',
  component: WelcomeSectionCard,
  argTypes: {},
};

const Template = (args) => (
  <WelcomeSectionCard {...args}>
    <Icon />
  </WelcomeSectionCard>
);

export const Default = Template.bind({});

Default.args = {
  title,
  totalItem: countItems(data),
  items: getItems(data),
};
