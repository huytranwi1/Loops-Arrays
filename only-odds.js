// Create a JavaScript code that accepts an array of numbers

// we can create a function that take in one parameter our function method called arr
 function arrNumbers (number) {

//create two variables, one take in the given arrays and one push the odd arrays

//let arrNumbers = [givenArrays];
// let inputArray = [2,4,6,8,11,20,15,22];
let oddNumber = [];


// let do a for loop with conditional statement
// and returns a new array with only the odd numbers from the original array. 

for(let i=0; i<number.length; i++) {
    if(number[i]%2 !== 0){
       oddNumber.push(number[i])
    }
 }
     console.log(oddNumber);

 }