import Fuse from 'fuse.js';
import getAllSubSectionItems from '@/helpers/getAllSubSectionItems';

import blockchains from '@/data/blockchains.yaml';

const { resources, chapters } = getAllSubSectionItems();

const options = {
  threshold: 0.0,
  includeMatches: true,
  findAllMatches: true,
  minMatchCharLength: 1,
};

const resourcesOption = {
  ...options,
  keys: ['name', 'items.title'],
};

const blockchainOption = {
  ...options,
  keys: ['name'],
};

const chaptersOption = {
  ...options,
  keys: ['title'],
};

export const searchItem = (value) => {
  const resourcesFuse = new Fuse(resources, resourcesOption);
  const blockchainFuse = new Fuse(blockchains, blockchainOption);
  const chaptersFuse = new Fuse(chapters, chaptersOption);
  const chaptersFuseData = chaptersFuse.search(value).map((res) => res);
  const resourcesFuseData = resourcesFuse.search(value).map((res) => res);
  const blockchainFuseData = blockchainFuse.search(value).map((res) => res);

  // console.log(chaptersFuseData);

  return {
    resource: resourcesFuseData,
    blockchain: blockchainFuseData,
    chapter: chaptersFuseData,
  };
};
