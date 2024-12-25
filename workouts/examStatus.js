// Write a program to check whether a student has passed or failed in a subject after he or she enters their mark (pass mark for a subject is 50 out of 100).

import readlineSync from "readline-sync";

const checkExamResultStatus = () => {
    const mark = parseFloat(readlineSync.question("\n" + "Enter your mark: "));
    const result = mark >= 50 ? "Passed" : "Failed";

    return result;
};

const examStatus = checkExamResultStatus();
console.log("\n" + `${examStatus}` + "\n");