// Write a program to multiply the adjacent values of an array and store it in an another array.

import readlineSync from "readline-sync";

const buildArray = (size) => {
    console.log("\n" + "Enter the values of array:");
    let array = [];
    
    for (let i = 1; i <= size; i++) {
        let value = parseFloat(readlineSync.question(`Enter value ${i}: `));
        array.push(value);
    }
    
    return array;
};

const multiplyAdjacentValues = (array) => {
    let updatedArray = [];

    for (let i = 0; i < array.length - 1; i++) {
        let value = array[i] * array[i + 1];
        updatedArray.push(value);
    }

    return updatedArray;
};

const main = () => {
    const size = parseFloat(readlineSync.question("\n" + "Enter the size of arrays: "));

    const array = buildArray(size);
    const finalArray = multiplyAdjacentValues(array);

    return finalArray;
};

const result = main();
console.log();
console.log(result, "\n");