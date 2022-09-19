// HOC - Higher order function are those function which accepts other function as a paramenter or it returns a function.
// In JavaScript, functions are treated as first-class citizens (object)

// Code academy: https://www.codecademy.com/learn/game-dev-learn-javascript-higher-order-functions-and-iterators/modules/game-dev-learn-javascript-iterators/cheatsheet
// free code camp: https://www.freecodecamp.org/news/higher-order-functions-in-javascript/

const array = [1,2,3,4,5,6];

const filterOdd = (arr) => {
    return arr.filter(number => number%2 !== 0)
};

const filterEven = (arr) => {
    return arr.filter(number => number%2 === 0)
};

// by passing function as argument
const filterNumber = (arr, filterOdd) => {
    return filterOdd(arr);
};

const output = filterNumber(array, filterOdd);
console.log(output);

// console.log(filterNumber(array, filterOdd));


// NOTE:
//     1. filterNumber is a Higher order function
//     2. filterOdd or filterEven is callback function


// ** other way is by passing function as a return only

// const filterNumber = (arr) => {
//     return filterOdd(arr);
// };