// Write an object oriented program to store and display the values of a 2D array.
// Program should contains 3 functions including the main function.

import readlineSync from "readline-sync";

class TwoDArray {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.array = [];
    }

    getArray() {
        console.log("\n" + "Enter the values of array: ");

        for (let i = 0; i < this.rows; i++) {
            let array1 = [];

            for (let j = 0; j < this.columns; j++) {
                let arrayValues = parseInt(readlineSync.question(`Enter value [${i + 1}][${j + 1}]:`));
                array1.push(arrayValues);
            }

            this.array.push(array1);
        }
    }

    displayArray() {
        console.log("\n" + "The values of the array are: " + "\n");

        for (let i = 0; i < this.rows; i++) {
            console.log(this.array[i].join(" "));
        }
    }
}

const main = () => {
    const numberOfRows = parseInt(readlineSync.question("\n" + "Enter the size of the rows: "));
    const numberOfColumns = parseInt(readlineSync.question("Enter the size of the columns: "));

    const array = new TwoDArray(numberOfRows, numberOfColumns);

    array.getArray();
    array.displayArray();
};

main();
console.log();