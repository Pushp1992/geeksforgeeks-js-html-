// url: https://www.codingame.com/playgrounds/9799/learn-solve-call-apply-and-bind-methods-in-javascript

// this” always refers to an object.
// “this” refers to an object which calls the function it contains.
// In the global context “this” refers to either window object or is undefined if the ‘strict mode’ is used.

const person = {
    name: 'raj',
    age: 23,
    city: 'bhopal',
    state: 'MP',
    getCity: function() {
        console.log(`the city name is ${this.city}`);
    }
};


// CALL (bind 'this' keyword/value ) >> invokes the function and allows you to pass in arguments one by one
function getDetails1(arg1, arg2) {
    console.log(`${this.name}, ${this.age}, arguments: ${arg1} and ${arg2}`);
};

getDetails1.call(person, 'tomato', 'potato');

// **** APPLY **** >> invokes the function and allows you to pass in arguments as an array

function getDetails2(...arguments) {
    console.log(`${this.name}, ${this.age}, arguments: ${arguments}`);
};

getDetails2.apply(person, ['raj', 'amar']);

// *** BIND ****  returns a new function, allowing you to pass in a this array and any number of arguments
// you can pass arguments as a individual and as a list also.

function getDetails3(arg1, arg2) {
    console.log(`${this.name}, ${this.age}, arguments: ${arg1} and ${arg2}`);
};

const result = getDetails3.bind(person, 'apple', 'banana');
console.log(result());