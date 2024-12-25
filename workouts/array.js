// Write a program to accept an array and display it on the console using functions.

import readlineSync from "readline-sync";

const getArray = (size) => {
    let array = [];
    
    for (let i = 1; i <= size; i++) {
        let value = parseFloat(readlineSync.question(`Enter value ${i}: `));
        array.push(value);
    }

    return array;
};

const displayArray = (array) => {
    console.log("\n" + `[${array.join(", ")}]` + "\n");
};

const main = () => {
    const size = parseFloat(readlineSync.question("\n"+ "Enter the size of arrays: "));
        
    console.log("\n" + "Enter the values of array:");
    const array = getArray(size);

    displayArray(array);
};

main();