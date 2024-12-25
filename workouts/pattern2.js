// Write a program to print the following pattern using for loop.
// 1
// 2  3
// 4  5	 6
// 7  8	 9  10

const printPattern = () => {
    let num = 1;
    console.log();

    for (let i = 0; i < 4; i++) {
        let str = "";
        for (let j = 0; j <= i; j++) {
            str += num++ + " ";
        }
        console.log(str + "\n");
    }
};

printPattern();