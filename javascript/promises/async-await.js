// it makse synchronous promise behave asynchrous

// The word “async” before a function means one simple thing: a function always returns a promise.


function add(x,y) {
    return x+y;
}

add(3,4) // 7

// now using async

async function add(x,y) {
    return x+y;
}

add(3,4).then(res => console.log(res));


// *** AWAIT ***

// it works inside async functin only

async function test() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    console.log(result); // "done!"
  }
  
  test();