// Given a variable named my_height, you must throw errors under the following conditions:

// notANumberError- When my_height is NaN
// HugeHeightError – When my_height is greater than
// TinyHeightError - When my_heightis less than

import readlineSync from "readline-sync";

const displayHeightAndError = () => {
    const input = readlineSync.question("\n" + "Enter your height: ");
    const height = Number(input);

    try {
        if (isNaN(height)) {
            throw new Error("notANumberError: Height must be a valid number.");
        }

        if (height > 50) {
            throw new Error("HugeHeightError: Height is too large.");
        }

        if (height <= 0) {
            throw new Error("TinyHeightError: Height must be greater than 0.");
        }

        console.log(`\nHeight is ${height}.\n`);
    } catch (error) {
        console.log(`\nError: ${error.message}\n`);
    }
};

displayHeightAndError();