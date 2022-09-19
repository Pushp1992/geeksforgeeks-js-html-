let number = 2 + 2;

switch (number) {
    case 3:
        console.log('number too small');
        break;
    case 4:
        console.log('Exactly same number!');
        break;
    case 5:
        console.log('number Too big');
        break;
    default:
        console.log("I don't know the value");
};

// ******* ASSIGNMENT *******

// 1. re-Write the code using if..else which would correspond to the following switch or convert Switch to if..else

switch (browser) {
    case 'Edge':
        console.log("You've got the Edge!");
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        console.log('Okay we support these browsers too');
        break;

    default:
        console.log('We hope that this page looks ok!');
}

// 2. Rewrite the code below using a single switch statement:

let a = '';

if (a == 0) {
    console.log(0);
}
if (a == 1) {
    console.log(1);
}

if (a == 2 || a == 3) {
    console.log('2,3');
}