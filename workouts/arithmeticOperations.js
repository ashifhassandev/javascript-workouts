// Write a menu driven program to do the basic mathematical operations such as addition, subtraction, multiplication and division (hint: use if else ladder or switch).

import readlineSync from "readline-sync";

class Calculator {
    addition(num1, num2) {
        return num1 + num2;
    }

    subtraction(num1, num2) {
        return num1 - num2;
    }

    multiplication(num1, num2) {
        return num1 * num2;
    }

    division(num1, num2) {
        if (num2 === 0) {
            console.log("\n" + "Division by zero is not allowed.");
            return NaN;
        }
        return num1 / num2;
    }
}

const displayMenu = () => {
    console.log();
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Exit");
};

const getNumbers = () => {
    const num1 = parseInt(readlineSync.question("\n" + "Enter the first number: "));
    const num2 = parseInt(readlineSync.question("Enter the second number: "));

    return { num1, num2 };
};

const main = () => {
    const calculator = new Calculator();

    displayMenu();

    let exit = false;
    while (!exit) {
        const choice = parseInt(readlineSync.question("\n" + "Enter your choice(1-5): "));

        switch (choice) {
            case 1: {
                const { num1, num2 } = getNumbers();
                const result = calculator.addition(num1, num2);
                console.log("\n" + "Result:", result);
                break;
            }
            case 2: {
                const { num1, num2 } = getNumbers();
                const result = calculator.subtraction(num1, num2);
                console.log("\n" + "Result:", result);
                break;
            }
            case 3: {
                const { num1, num2 } = getNumbers();
                const result = calculator.multiplication(num1, num2);
                console.log("\n" + "Result:", result);
                break;
            }
            case 4: {
                const { num1, num2 } = getNumbers();
                const result = calculator.division(num1, num2);
                console.log("\n" + "Result:", result);
                break;
            }
            case 5:
                console.log("\n" + "Exiting the program." + "\n");
                exit = true;
                break;
            default:
                console.log("\n" + "Invalid entry. Please try again.");
        }
    }
};

main();