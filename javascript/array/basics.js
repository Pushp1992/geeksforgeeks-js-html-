// array creation
const animalList = new Array();
console.log(animalList);

// adding value to Array
animalList.push('tiger')
animalList.push('lion');

console.log(animalList);

// access value from array using index
console.log(animalList[0])

// advance: destructuring Array means, extracting values from Array
const [firstAnimal, secondAnimal] = animalList;
console.log('destructuring', firstAnimal, secondAnimal);

// // get index of particular element in array
const index = animalList.indexOf('tiger');
console.log(index);

// iterating over Array uisng (for .. of)
for(let animal of animalList) {
    console.log(animal)
}
