// Using the ‘switch case’ write a program to accept an input number from the user and output the day as follows.

import readlineSync from "readline-sync";

const getDayName = (num) => {
    let day;

    switch (num) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "Invalid entry";
            break;
    }

    return day;
};

const showDayName = () => {
    const num = parseFloat(readlineSync.question("\n" + "Enter a number(1 - 7): "));
    const day = getDayName(num);

    return day;
};

const selectedDay = showDayName();
console.log("\n" + `${selectedDay}` + "\n");