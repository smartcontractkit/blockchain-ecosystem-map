/* Import yaml files */

// Get Started
import learnData from '@/data/learn.yaml';
import fundData from '@/data/fund.yaml';

// Development Cycle
import developData from '@/data/develop.yaml';
import testData from '@/data/test.yaml';
import secureData from '@/data/secure.yaml';
import deployData from '@/data/deploy.yaml';
import monitorData from '@/data/monitor.yaml';
import manageData from '@/data/manage.yaml';

// Share
import communityData from '@/data/community.yaml';
import marketData from '@/data/market.yaml';

const chapters = {
  get_stated: [
    {
      title: 'Learn',
      data: learnData,
    },
    {
      title: 'Fund',
      data: fundData,
    },
  ],
  development_cycle: [
    {
      title: 'Develop',
      data: developData,
    },
    {
      title: 'Test',
      data: testData,
    },
    {
      title: 'Secure',
      data: secureData,
    },
    {
      title: 'Deploy',
      data: deployData,
    },
    {
      title: 'Monitor',
      data: monitorData,
    },
    {
      title: 'Manage',
      data: manageData,
    },
  ],
  share: [
    {
      title: 'Community',
      data: communityData,
    },
    {
      title: 'Market',
      data: marketData,
    },
  ],
};

export default chapters;
