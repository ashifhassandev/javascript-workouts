// Write a program to add two dimensional arrays.
// Program should accept two 2D arrays and display its sum

// Eg: Output: Enter the size of arrays
// Input: 3

// Output: Enter the values of array 1
// Input: 
// 1 2 3
// 4 5 6
// 7 8 9

// Output: Enter the values of array 2
// Input:
// 10 20 30
// 40 50 60
// 70 80 90

// Output: Sum of 2 arrays is:
// 11 22 33
// 44 55 66
// 77 88 99

import readlineSync from "readline-sync";

const buildArrays = (numberOfRows, numberOfColumns) => {
    let array = [];

    for (let i = 0; i < numberOfRows; i++) {
        let row = [];
    
        for (let j = 0; j < numberOfColumns; j++) {
            let arrayValue = parseInt(readlineSync.question(`Enter value [${i + 1}][${j + 1}]: `));
            row.push(arrayValue);
        }
    
        array.push(row);
    }

    return array;
};

const add2DArrayValues = (array1, array2, numberOfRows, numberOfColumns) => {
    let sumArray = [];

    for (let i = 0; i < numberOfRows; i++) {
        let row = [];

        for (let j = 0; j < numberOfColumns; j++) {
            let arraySumValues = array1[i][j] + array2[i][j];
            row.push(arraySumValues);
        }
    
        sumArray.push(row);
    }
    
    return sumArray;
};

const displayArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].join(" "));
    }
};

const main = () => {
    const numberOfRows = parseInt(readlineSync.question("\n" + "Enter the size of the rows: "));
    const numberOfColumns = parseInt(readlineSync.question("Enter the size of the columns: "));

    console.log("\n" + "Enter the values of array1:");
    let array1 = buildArrays(numberOfRows, numberOfColumns);

    console.log("\n" + "Enter the values of array2:");
    let array2 = buildArrays(numberOfRows, numberOfColumns);

    console.log("\n" + "Sum of values of Array 1 and Array 2: " + "\n");
    const finalArray = add2DArrayValues(array1, array2, numberOfRows, numberOfColumns);

    displayArray(finalArray);
    console.log();
};

main();