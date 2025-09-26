// Implement a function to flatten a deeply nested array of numbers (no built-ins like flat()).
const numbers = [1, [2, [3, [4, [5, [6, [7, [8, [9, 10]]]]]]]]];

const flattenHelper = (item, result) => {
  if (Array.isArray(item)) {
    for (let i = 0; i < item.length; i++) {
      flattenHelper(item[i], result);
    }
  } else {
    result.push(item);
  }
};

const flatten = (arr) => {
  const result = [];
  flattenHelper(arr, result);
  return result;
};

console.log(flatten(numbers));