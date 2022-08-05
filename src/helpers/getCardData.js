export const getItems = (data) => {
  const cardData = data.map((res) => res.items).flat();
  return cardData;
};
export const countItems = (data) => getItems(data).length;
