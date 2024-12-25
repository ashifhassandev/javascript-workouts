// Write a program to interchange the values of two arrays.

import readlineSync from "readline-sync";

const buildArrays = (size) => {
    let array = [];

    for (let i = 1; i <= size; i++) {
        let value = parseFloat(readlineSync.question(`Enter value ${i}: `));
        array.push(value);
    }

    return array;
};

const swapArrayValues = () => {
    const size = parseFloat(readlineSync.question("\n" + "Enter the size of arrays: "));

    console.log("\n" + "Enter the values of array1:");
    let array1 = buildArrays(size);

    console.log("\n" + "Enter the values of array2:");
    let array2 = buildArrays(size);

    [array1, array2] = [array2, array1];

    console.log("\n" + "Arrays after swapping:" + "\n");
    console.log("Array1:", array1.join(", "));
    console.log("Array2:", array2.join(", "));
    console.log();
};

swapArrayValues();