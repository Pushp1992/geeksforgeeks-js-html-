// Constructor function
// url: https://javascript.info/constructor-new

// Constructor functions technically are regular functions. There are two conventions though:

// They are named with capital letter first.
// They should be executed only with "new" operator.


function Fruit(name, taste) {
    this.name = name;
    this.taste = taste;
    this.isRed = false;
};

const fruitName = new Fruit('apple', 'sweet')

console.log(fruitName);


// When a function is executed with new, it does the following steps:

// A new empty object is created and assigned to this.
// The function body executes. Usually it modifies this, adds new properties to it.
// The value of this is returned.

// Usually, constructors do not have a return statement. 