// Write a program to print the following pattern (hint: use nested loop).
//  1
//  1 2
//  1 2 3
//  1 2 3 4
//  1 2 3 4 5

const printGivenPattern = () => {
    console.log();

    for (let i = 1; i <= 5; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }

        console.log(row);
    }

    console.log();
};

printGivenPattern();