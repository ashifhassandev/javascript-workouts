// Write a program to show the grade obtained by a student after he/she enters their total mark percentage.

import readlineSync from "readline-sync";

const calculateGrade = (mark) => {
    let grade;
    
    if (mark >= 90 && mark <= 100) {
        grade = "A";
    } else if (mark >= 80 && mark < 90) {
        grade = "B";
    } else if (mark >= 70 && mark < 80) {
        grade = "C";
    } else if (mark >= 60 && mark < 70) {
        grade = "D";
    } else if (mark >= 50 && mark < 60) {
        grade = "E";
    } else if (mark >= 0 && mark < 50) {
        grade = "Failed";
    } else {
        grade = "Mark should be between 0 and 100";
    }

    return grade;
};

const showExamGrade = () => {
    const mark = parseFloat(readlineSync.question("\n" + "Enter your mark: "));
    const grade = calculateGrade(mark);
    
    return grade;
};

const result = showExamGrade();
console.log("\n" + `Your grade is ${result}` + "\n");