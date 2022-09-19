// function which is passed as an argumet to another function is called callback function

function diplayName(name) {
    console.log(`hello ${name}`)
};

function getName(username, diplayName) {
    if(username !== '') return diplayName(username);
};

getName('rohit', diplayName);


// pseudo code

// function getname(username, callback) {
//     if(username !== '') return callback();
// }