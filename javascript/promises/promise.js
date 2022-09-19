// url: https://javascript.info/promise-basics

// promise is an object that helps to achieve asynchrous execution of cod ein js
// promise is a kind of commitment made to give back you result, either +ve, negative.

// state of promise:
// pending (initial state) >> resolved >> rejected

const number = 5;
const promise = new Promise((resolve, reject) => {
    if(number) {
        resolve(console.log('success'))
    } else {
        reject(console.log('failure'))
    }
})

// consume promise using "then"

const promise1 = new Promise((resolve, reject) => {
    if(number > 10) {
        resolve('success')
    } else {
        reject(new Error('failure'))
    }
});

promise1.then(data => console.log(data));

// throw error or success based on condition

const num = 5;

let promise2 = new Promise(function(resolve, reject) {
 if(num > 3) {
     reject(new Error("Whoops!"));
 } else {
     resolve('success')
 }
});

promise2.then(
    result => alert(result), // doesn't run
    error => alert(error) // shows "Error: Whoops!" after 1 second
);

// using error block (change  if(num > 3) to  if(numsss > 3))

promise2.then(
    result => alert(result), // doesn't run
    error => alert(error) // shows "Error: Whoops!" after 1 second
  ).catch(err => {
      console.log(err)
  })



  // show asynchronous operation using promise

  let promis4 = new Promise(function(resolve, reject) {
    if(5) {
        resolve(setTimeout(() => {
        console.log('success')
    }, 2000));
    }
});


let promis5 = new Promise(function(resolve, reject) {
    if(5) resolve(console.log('hellllo'))
});

// promis5 will called first and then promis4