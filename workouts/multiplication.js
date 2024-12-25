// Write a program to print the multiplication table of given numbers.

import readlineSync from "readline-sync";

const printMultiplicationTable = () => {
    const num = parseFloat(readlineSync.question("\n" + "Enter a number: "));
    console.log();
    
    for (let i = 1; i <= 10; i++) {
        const multiplication = i * num;
        console.log(`${i} x ${num} = ${multiplication}`);
    }

    console.log();
};

printMultiplicationTable();