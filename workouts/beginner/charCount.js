// Count how many times each character appears in a string.
const str = "Javascript";

const getCharCount = (str) => {
  const charCount = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
};

console.log(getCharCount(str));