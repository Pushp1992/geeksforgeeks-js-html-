
const number = 10;

const addNumber = (number) => {
    let sum = 0;
    for(let i = 0; i <= number; i++) {
        sum += i;
    }
    console.log(sum);
    // return sum;
}

// addNumber(number);

// using recursion

const addNumberUsingRecursion = (number, sum = 0) => {
    while(number > 0) {
        sum += number;
        number--;
        return addNumberUsingRecursion(number, sum);
    }
    console.log(sum);
    return sum;
}

// addNumberUsingRecursion(number);

