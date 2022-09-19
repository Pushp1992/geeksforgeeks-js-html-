// it is all about caching of data

// The concept of memoization in JavaScript relies on two concepts:

// Closures: The combination of a function and the lexical environment within which that function was declared. You can read more about them here and here.
// Higher Order Functions: Functions that operate on other functions, either by taking them as arguments or by returning them. You can read more about them

// e.g: fibonacci series

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …

// normal ex

const fib = (n) => {
    if (n <= 1) return 1
    return fib(n - 1) + fib(n - 2)
}

// using memoization

const fibo = (n, memo={}) => {

    if (memo[n]) return memo[n]

    if (n <= 1) return 1
    return memo[n] = fibo(n-1, memo) + fibo(n-2, memo)
}