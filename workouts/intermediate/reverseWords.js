// Given a string with words separated by spaces, reverse the words order but keep the letters in each word.
const str = "Javascript is a programming language";

const reverseWords = (str) => {
  const arr = str.split(" ");
  const result = [];

  let i = arr.length - 1;

  while (i >= 0) {
    result.push(arr[i]);
    i--;
  }

  return result.join(" ");
};

console.log(reverseWords(str));