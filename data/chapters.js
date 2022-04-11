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
  get_started: [
    {
      title: 'Learn',
      data: learnData,
      id: 'learn',
    },
    {
      title: 'Fund',
      data: fundData,
      id: 'fund',
    },
  ],
  development_cycle: [
    {
      title: 'Develop',
      data: developData,
      id: 'develop',
    },
    {
      title: 'Test',
      data: testData,
      id: 'test',
    },
    {
      title: 'Secure',
      data: secureData,
      id: 'secure',
    },
    {
      title: 'Deploy',
      data: deployData,
      id: 'deploy',
    },
    {
      title: 'Monitor',
      data: monitorData,
      id: 'monitor',
    },
    {
      title: 'Manage',
      data: manageData,
      id: 'manage',
    },
  ],
  share: [
    {
      title: 'Community',
      data: communityData,
      id: 'community',
    },
    {
      title: 'Market',
      data: marketData,
      id: 'market',
    },
  ],
};

export default chapters;
