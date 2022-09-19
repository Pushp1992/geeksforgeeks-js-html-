// object creation
const person = new Object();
console.log(person);

// adding key/value to object
person.name = 'raj';
person.age = 23;

console.log(person);

// conventional way of extrating value from object
const personName = person.name;
console.log(personName)


// advance: destructuring object means, extracting values from object
const {name, age} = person;
console.log('destructuring', name, age);

// get list of object keys
const objectKeys = Object.keys(person);
console.log(objectKeys);

// get list of object values
const objectValues = Object.values(person);
console.log(objectValues);

// iterating over object uisng (for .. in)
for(let key in person) {
    console.log(key)
}

// deleteing object value
delete person['name'];
console.log(person)