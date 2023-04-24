// Create a JavaScript code that accepts a string of lowercase letters. 
// Print the word followed by how many consonants and vowels it has.
// "a", "e", "i", "o", and "u" are considered vowels. 
// Every other letter is considered a consonant.

// create a javascript function that take in a string

function vcCount(str) {

    // create variables that take in vowels and consonants 

    let consonant = 0;// count start from zero
    let vowels = 0;// count start from zero
    let vowelList = "aeiouAEIOU";// include lower and upper case letter

// create a for loops
    for (let i=0; i<str.length; i++) {

// create an if statement that take in the string and return the value

        if (vowelList.indexOf(str[i]) > -1) {
            vowels++; // count the vowels
        } else {
            consonant++; // count the other letters
        }
    }

    // return the string plus variable
    return "ukulele has " + consonant + " consonants and " + vowels + " vowels.";
    
}

// input the string
 console.log(vcCount("textbook"));

