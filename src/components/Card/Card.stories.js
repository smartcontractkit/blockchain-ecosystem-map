import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Angular',
  imageSrc: '/logos/angular.png',
  url: 'https://www.google.com',
};

Default.parameters = {
  size: {
    default: 'large',
  },
};
