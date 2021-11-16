//Methods used:
//string.split('')
//string.slice(index start, index end(ex)) - if end not provided, the rest of the string is automatically included
//word[0].toUppercase()

//Steps:
//Create a function that takes one input
// Make an empty array called "words"
//Split the input string by spaces to get an array
//For each word in array:
    //Uppercase the first word
    //Join the first letter with the rest of the string
    //Push result into "words array"
//Join "words" into a string and return it


//Method one example:
//function capitalization(str) {
//    let words = [];
//    for (let word of str.split(' ')){
//        let cap = word[0].toUpperCase() + word.slice(1)
//        words.push(cap);
//    }
//    return words.join(' ');
//}

//Method two:
// - Create a function that takes in a string
// - Create an empty string called 'result'
// - For each character in the string:
    // - If the character is to the left of a space,
    // - Capitalize it and add it to the 'result'
    // - Else, add it to 'result'