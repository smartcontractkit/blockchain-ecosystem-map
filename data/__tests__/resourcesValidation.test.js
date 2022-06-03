import learnData from '../learn.yaml';
import fundData from '../fund.yaml';
import developData from '../develop.yaml';
import testData from '../test.yaml';
import secureData from '../secure.yaml';
import deployData from '../deploy.yaml';
import monitorData from '../monitor.yaml';
import manageData from '../manage.yaml';
import communityData from '../community.yaml';
import marketData from '../market.yaml';

const DATA_FILES = [
  learnData,
  fundData,
  developData,
  testData,
  secureData,
  deployData,
  monitorData,
  manageData,
  communityData,
  marketData,
];

describe('All the resource titles should be 32 characters or less.', () => {
  DATA_FILES.forEach((file) => {
    const titles = file.flatMap((object) => object.items.map((item) => item.title));
    console.log(titles);
    test.each(titles)(`%s`, (title) => {
      expect(title.length).toBeLessThanOrEqual(32);
    });
  });
});
