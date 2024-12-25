// Write a program to sort an array in descending order

import readlineSync from "readline-sync";

const buildArray = (size) => {
    let array = [];

    for (let i = 1; i <= size; i++) {
        let value = parseFloat(readlineSync.question(`Enter value ${i}: `));
        array.push(value);
    }

    return array;
};

const sortArrayDescending = () => {
    const size = parseFloat(readlineSync.question("\n" + "Enter the size of arrays: "));
    
    console.log("\n" + "Enter the values of array:");
    let array = buildArray(size);

    const sortedArray = array.sort((a, b) => b - a);
    return sortedArray;
};

const sortedArray = sortArrayDescending();
console.log("\n" + `Sorted array: ${sortedArray}` + "\n");