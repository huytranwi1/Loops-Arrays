// Create a JavaScript code that prints each number from 1 to 100 on a new line.

// create a variable take doesnt take in an empty value
let i;

// we want to create a for loop that loop from 1 to 100.
// <= because we also want to include the 100
for(let i=1; i<=100; i++) {

   // For numbers that are multiples of 15, print "FizzBuzz" instead of the number.
   // any number with a multiple 15 first, otherwise it will priotize multiple of 3 and 5.
   if(i%15 === 0) {
        console.log("FizzBuzz");

   // For each multiple of 3, print "Fizz" instead of the number.
   } else if (i%3 === 0) {
        console.log("Fizz");

    // For each multiple of 5, print "Buzz" instead of the number.
     } else if(i%5 === 0) {
        console.log("Buzz");


    // print all the other numbers which is i
     } else {
        console.log(i);
     }
     
}

