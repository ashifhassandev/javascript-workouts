// Write a program to find the sum of all the odd numbers for a given limit.

import readlineSync from "readline-sync";

const sumOfOddNumbers = () => {
    const limit = parseFloat(readlineSync.question("\n" + "Enter a limit: "));

    let sum = 0;   
    for (let i = 1; i <= limit; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }

    return sum;
};

const result = sumOfOddNumbers();
console.log("\n" + `Sum of odd numbers = ${result}` + "\n");