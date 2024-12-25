// Write a program to find the simple interest.
// Program should accept 3 inputs from the user and calculate simple interest for the given inputs.
// Formula: SI=(P*R*n)/100)

import readlineSync from "readline-sync";

const calculateSimpleInterest = () => {
    const principalAmount = parseFloat(readlineSync.question("\n" + "Enter the principal amount: "));
    const interestRate = parseFloat(readlineSync.question("Enter the interest rate: "));
    const numberOfYears = parseFloat(readlineSync.question("Enter the number of years: "));

    const simpleInterest = (principalAmount * interestRate * numberOfYears) / 100;
    return simpleInterest;
};

const result = calculateSimpleInterest();
console.log("\n" + `The simple interest is ${result}.` + "\n");