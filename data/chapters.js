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

/* All Icons */

import LearnIcon from '@/icons/learn.svg';
import FundIcon from '@/icons/fund.svg';
import DevelopIcon from '@/icons/develop.svg';
import TestIcon from '@/icons/test.svg';
import SecureIcon from '@/icons/secure.svg';
import DeployIcon from '@/icons/deploy.svg';
import MonitorIcon from '@/icons/monitor.svg';
import ManageIcon from '@/icons/manage.svg';
import CommunityIcon from '@/icons/community.svg';
import MarketIcon from '@/icons/market.svg';

const chapters = {
  get_started: [
    {
      title: 'Learn',
      data: learnData,
      id: 'learn',
      Icon: LearnIcon,
    },
    {
      title: 'Fund',
      data: fundData,
      id: 'fund',
      Icon: FundIcon,
    },
  ],
  development_cycle: [
    {
      title: 'Develop',
      data: developData,
      id: 'develop',
      Icon: DevelopIcon,
    },
    {
      title: 'Test',
      data: testData,
      id: 'test',
      Icon: TestIcon,
    },
    {
      title: 'Secure',
      data: secureData,
      id: 'secure',
      Icon: SecureIcon,
    },
    {
      title: 'Deploy',
      data: deployData,
      id: 'deploy',
      Icon: DeployIcon,
    },
    {
      title: 'Monitor',
      data: monitorData,
      id: 'monitor',
      Icon: MonitorIcon,
    },
    {
      title: 'Manage',
      data: manageData,
      id: 'manage',
      Icon: ManageIcon,
    },
  ],
  share: [
    {
      title: 'Community',
      data: communityData,
      id: 'community',
      Icon: CommunityIcon,
    },
    {
      title: 'Market',
      data: marketData,
      id: 'market',
      Icon: MarketIcon,
    },
  ],
};

export default chapters;
