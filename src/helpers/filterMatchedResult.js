function checkDuplicate(target, value) {
  const result = target.find((res) => res.title === value.title && res.url === value.url);
  return result;
}
const filterMatchedResult = (payload) => {
  let result = [];
  payload.forEach((res) => {
    const { item, matches } = res;
    const { id, name, title, Icon, url, logo, items } = item;
    matches.forEach(({ refIndex, value }) => {
      let data = null;
      if (refIndex !== null && refIndex !== undefined) {
        const myItem = items[refIndex];
        data = myItem;
      } else if (value === name || value === title) {
        data = {
          title: name ?? title,
          id,
          url,
          logo,
          Icon,
        };
      }

      if (data) {
        if (result.length) {
          const checker = checkDuplicate(result, data); //Avoid having duplicate title and url
          if (!checker) {
            result = [...result, data];
          }
        } else {
          result = [data];
        }
      }
    });
  });

  return result;
};

export default filterMatchedResult;
