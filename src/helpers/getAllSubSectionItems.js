import chapters from '@/data/chapters';

const getAllSubSectionItems = () => {
  const allChapters = Object.values(chapters);
  const chaptersData = allChapters.flat().map((res) => res.data);
  const chaptersWithoutData = allChapters.flat().map(({ title, id, Icon }) => {
    return {
      title,
      id,
      Icon,
    };
  });

  return {
    resources: chaptersData.flat(),
    chapters: chaptersWithoutData.flat(),
  };
};

export default getAllSubSectionItems;
