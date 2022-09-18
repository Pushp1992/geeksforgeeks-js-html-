
// while loop

// when i becomes 0, the condition becomes false, and the loop stops
let j = 6;
while (i) {
  console.log( i );
  i--;
}

// do-while

let i = 0;
do {
  console.log( i );
  i++;
} while (i < 3);


// for loop

// will print number fro, 0 to 4
for (let j = 0; j < 5; j++) {
    console.log(`the current number is ${j}`);
}

// ************ ASSIGNMENT ***********

// 1.  What is the last value alerted by this code? Why?

let k = 3;

while (k) {
  alert( k-- );
}

// 2. Which values does the while loop show?

// a.
let m = 0;
while (++m < 5) alert( m );

// b.
let n = 0;
while (n++ < 5) alert( n );

