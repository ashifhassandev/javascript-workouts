// Check if a string is a palindrome (same forwards and backwards).
const str = "Javascript";

const checkPalindrome = (str) => {
  str = str.toLowerCase();
  const arr = str.split("");

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) return false;
    left++;
    right--;
  }

  return true;
};

console.log(checkPalindrome(str));