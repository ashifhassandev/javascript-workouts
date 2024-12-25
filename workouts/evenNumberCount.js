// Write a program to find the number of even numbers in an array.

import readlineSync from "readline-sync";

const buildArray = (size) => {
    let array = [];

    for (let i = 1; i <= size; i++) {
        let value = parseFloat(readlineSync.question(`Enter value ${i}: `));
        array.push(value);
    }

    return array;
};

const findEvenNumbersCount = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            count++;
        }
    }

    return count;
};

const displayEvenNumbersCount = () => {
    const size = parseFloat(readlineSync.question("\n" + "Enter the size of arrays: "));

    console.log("\n" + "Enter the values of array:");
    let array = buildArray(size);

    const evenNumbersLength = findEvenNumbersCount(array);
    console.log("\n" + `Number of even numbers is ${evenNumbersLength}.` + "\n");
};

displayEvenNumbersCount();