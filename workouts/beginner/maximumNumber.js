// Find the maximum and minimum numbers in an array without using built-ins like Math.max.
const arr = [3, 5, 1, 17, 11, 9, 35, 23, 7, 18];

const findMaximumNumber = (arr) => {
  let maxNum = 0;

  for (const num of arr) {
    maxNum = num > maxNum ? num : maxNum;
  }

  return maxNum;
};

console.log(findMaximumNumber(arr));