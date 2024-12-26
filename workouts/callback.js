// Write a myFilter function that takes 2 parameters: myArray and callback. Here, myArray is an array of numbers and callback is a function that takes the elements of myArray as its parameter and returns a boolean true if the sum of the number is even or false if the sum of the number  is odd.

const calculateSumAndSendBooleanResponse = (array) => {
    const sum = array.reduce((accumulator, current) => accumulator + current, 0);

    return sum % 2 === 0 ? true : false;
};

const myArray = [2, 4, 6, 8];

const myFilter = (array, callback) => {
    const response = callback(array);
    return response;
};

const result = myFilter(myArray, calculateSumAndSendBooleanResponse);
console.log();
console.log(result, "\n");