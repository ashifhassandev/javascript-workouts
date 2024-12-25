// Accept a char input from the user and display it on the console.

import readlineSync from "readline-sync";

const displayCharInput = () => {
    const char = readlineSync.question("\n" + "Enter your name: ");
    return char;
};

const name = displayCharInput();
console.log(`\nWelcome ${name}\n`);