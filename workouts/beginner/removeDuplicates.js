// Remove all duplicates from an array in O(n) time without using set().
const arr = [1, 2, 3, 3, 4, 5, 6, 5, 7, 8, 9, 8, 6];

const removeDuplicates = (arr) => {
  const seen = {};
  const result = [];

  for (const num of arr) {
    if (!seen[num]) {
      seen[num] = true;
      result.push(num);
    }
  }

  return result;
};

console.log(removeDuplicates(arr));