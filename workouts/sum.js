// Accept two inputs from the user and output their sum.

import readlineSync from "readline-sync";

const displaySum = () => {
    const num1 = parseFloat(readlineSync.question("\n" + "Enter the first number: "));
    const num2 = parseFloat(readlineSync.question("Enter the second number: "));

    const sum = num1 + num2;
    return sum;
};

const result = displaySum();
console.log(`\nThe sum is ${result}.\n`);