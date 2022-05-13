const array = [1, 2, 3];
const array2 = [2, 1, 3];

const array3 = array.filter((arr) => {
  return !array2.includes(arr);
});

console.log(array3);
