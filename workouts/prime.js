// Write a program to check whether a given number is prime or not.

import readlineSync from "readline-sync";

const checkPrime = () => {
    const num = parseFloat(readlineSync.question("\n" + "Enter a number: "));

    if (num <= 1) {
        return false;
    }
    
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

const displayPrime = () => {
    const primeResult = checkPrime();
    return primeResult
        ? "Entered number is a Prime number."
        : "Entered number is not a Prime number.";
};

const str = displayPrime();
console.log("\n" + str + "\n");