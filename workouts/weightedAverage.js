// Grades are computed using a weighted average. Suppose that the written test counts 70%,  lab exams 20% and assignments 10%.
// If Arun has a score of:

// Written test = 81
// Lab exams = 68
// Assignments = 92
// Arun’s overall grade = (81x70)/100 + (68x20)/100 + (92x10)/100 = 79.5

// Write a program to find the grade of a student during his academic year.

import readlineSync from "readline-sync";

const findOverallGrade = () => {
    console.log("\n" + "Enter the marks obtained for each subject:" + "\n");

    const writtenTest = parseFloat(readlineSync.question("Written test = "));
    const labExams = parseFloat(readlineSync.question("Lab exams = "));
    const assignments = parseFloat(readlineSync.question("Assignments = "));

    const overallGrade = (writtenTest * 70) / 100 + (labExams * 20) / 100 + (assignments * 10) / 100;
    return overallGrade;
};

const result = findOverallGrade();
console.log("\n" + "Your overall grade is", result + "\n");