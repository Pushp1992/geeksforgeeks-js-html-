// String Conversion

let isHuman = true;
console.log(typeof isHuman); // boolean

isHuman = String(isHuman); // now isHuman is a string "true"
console.log(typeof isHuman); // string

// Numeric Conversion

console.log( "8" / "2" ); // 3, strings are converted to numbers

// ** Using Number keyword to conver to number
let number = "123";
console.log(typeof number); // string

let num = Number(number); // becomes a number 123

console.log(typeof num); // number


// Boolean Conversion
console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false