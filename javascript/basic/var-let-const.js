// comment each block to see how variable works with let const and var keywords

// using var

var fruit = 'apple';
var fruit = 'banana';

// using let  (variable can re-initialised but can not re-declared with other variable type)

let veggie = 'cabbage';
var veggie = 'tomato'; // error: variable alredy been declared (it avoid duplication)

// const  (variable can not be re-initialised and re-declared)

const animal = 'TIGER';
animal = 'lion'; // throw type error