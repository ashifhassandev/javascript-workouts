// Merge two sorted arrays into one sorted array without using .sort().
const arr1 = [1, 2, 6, 12, 18];
const arr2 = [3, 5, 7, 9, 15, 20];

const mergeSortedArrays = (arr1, arr2) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }

  while (i < arr1.length) result.push(arr1[i++]);
  while (j < arr2.length) result.push(arr2[j++]);

  return result;
};

console.log(mergeSortedArrays(arr1, arr2));