// url: https://javascript.info/class-inheritance

// class is template for creating objects
// they encapsulate data

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

        run(speed) {
            this.speed = speed;
            console.log(`speed is ${speed} km`)
        }
}

const animalName = new Animal('tiger', '2');
console.log(animalName);
console.log(animalName.run(5));

