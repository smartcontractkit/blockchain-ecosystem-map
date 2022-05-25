function checkDuplicate(target, value) {
  const result = target.find((res) => res.title === value.title || res.url === value.url);
  return result;
}
const filterMatchedResult = (payload, heading) => {
  let result = [];
  payload.forEach((res) => {
    const { item, matches } = res;
    const { id, name, title, Icon, url, logo, items } = item;

    matches.forEach(({ refIndex, value }) => {
      let data = null;
      /* If what is matched is a content in an array then there sill be a refIndex which will help get the exact item matched, if not that means its the object itself*/
      if (refIndex !== null && refIndex !== undefined) {
        const myItem = items[refIndex];
        data = myItem;
        data.heading = heading;
        if (!data.url) {
          data.heading = 'sections';
        }
      } else if (value === name || value === title) {
        data = {
          title: name ?? title,
          id,
          url,
          logo,
          Icon,
          heading,
        };

        if (!data.url) {
          data.heading = 'sections';
        }
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
