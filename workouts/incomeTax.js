// Write a program to find out the income tax amount of a person.

import readlineSync from "readline-sync";

const calculateIncomeTax = (income) => {
    let incomeTax;
    
    if (income > 0 && income <= 250000) {
        incomeTax = 0;
        return incomeTax;
    }

    else if (income > 250000 && income <= 500000) {
        incomeTax = (income - 250000) * 0.05;
        return incomeTax;
    }

    else if (income > 500000 && income <= 1000000) {
        incomeTax = (income - 500000) * 0.20 + (500000 - 250000) * 0.05;
        return incomeTax;
    }

    else if (income > 1000000 && income <= 5000000) {
        incomeTax = (income - 1000000) * 0.30 + (1000000 - 500000) * 0.20 + (500000 - 250000) * 0.05;
        return incomeTax;
    }

    else if (income > 5000000) {
        console.log("\n" + "Annual income is above 50 lakh. Please consult an expert for tax calculation." + "\n");
        return NaN;
    }
    
    else if (income <= 0) {
        console.log("\n" + "Invalid entry." + "\n");
        return NaN;
    }

    return NaN;
};

const displayIncomeTax = () => {
    const income = parseFloat(readlineSync.question("\n" + "Enter the annual income: "));
    const incomeTax = calculateIncomeTax(income);

    return incomeTax;
};

const result = displayIncomeTax();

if (!isNaN(result)) {
    console.log("\n" + "Income tax amount is", result + "\n");
}