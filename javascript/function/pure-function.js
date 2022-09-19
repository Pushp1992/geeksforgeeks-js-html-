// url: https://www.freecodecamp.org/news/what-is-a-pure-function-in-javascript-acb887375dfe/
// url: https://www.educative.io/answers/what-is-the-difference-between-call-apply-bind


// A fuction is Pure function if it follows 2 checklist 

// 1. function for given same input always returns the same output
// 2. It prevents/avoid side effect

const add = (x,y) => x+y;

add(2,4);


// impure function (the value keep changing without any control in function and it will be difficult to write test)

let x = 4;

const addNumber = (y) => x += y;

addNumber(2);


// What is SIDE EFFECTS?

//ANS:  modifying or changing our code, causing it to have unpredictable behavior
