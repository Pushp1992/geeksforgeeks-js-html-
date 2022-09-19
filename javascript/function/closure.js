// ur: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

// it helps to access the child  function even after the parent function is executed

// in general english: a closure gives you access to an outer function's scope from an inner function


// failed case

// DEMO IT IN BROWSER

// actual closure success
function prent() {
    let fruit = 'apple';

    function child() {
        console.log(fruit);
    }
    return child;
};

const res = prent();

console.log(res);



// NOTE:
// Nested functions have access to variables declared in their outer scope.
// child fn() has access to the variable to it's parent fn() or it's sourrounding. This is called lexical sourrounding

//  lexical scoping uses the location where a variable is declared within the source code

