
// MAP : it takes array as an input, perform some operation and returns new array in output.

const numberList = [1,2,3,4,5,6,7,8];

const output = numberList.map((element) => {
    return element +=2
});

console.log(output);


// FILTER: it takes array as an input and filter the elements of an array based on condition and returns new array
//e.g: filter all number from numberList array which is greater that 5

const filteredResult = numberList.filter(number => number > 5);
console.log(filteredResult);

// REDUCE: it takes array as an input and perform basic operation and returns single value

const sum = numberList.reduce((previousValue, currentValue) => previousValue +  currentValue);

console.log(sum);