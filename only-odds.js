// Create a JavaScript code that accepts an array of numbers
// create a function that take in 1 parameter


function odd(oddNumber) {

    // we also need a variable that take in an empty array
    let oddArr = [];

    // create a for loop that will loop through the oddNumber parameter and increment because we want the program to count all number in array
    for(let i = 0; i<oddNumber.length; i++) {

        // we need a conditional statement that says if we divide our given array by 2 and if it remainder is odd or even
        if((oddNumber[i]%2) !== 0) {

            // we need to push the given array any odd number into our oddArr variable
            oddArr.push(oddNumber[i])
        }
    }
    // we return the value of oddArr variable

    console.log(oddArr)
}



