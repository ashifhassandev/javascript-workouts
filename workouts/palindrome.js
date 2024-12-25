// Write a program to identify whether a string is a palindrome or not.

import readlineSync from "readline-sync";

const checkPalindromeString = () => {
    const str = readlineSync.question("\n" + "Enter a string: ");
    const reversed = str.split("").reverse().join("").toLowerCase();

    return str.toLowerCase() === reversed
        ? `${str} is a palindrome.`
        : `${str} is not a palindrome.`;
};

const result = checkPalindromeString();
console.log("\n" + `${result}` + "\n");