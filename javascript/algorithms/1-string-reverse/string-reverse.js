//Method 1: In-Built Method

// - Create a function that takes in a string parameter (str)
// - call split(' ') method on the str
// - call reverse() method on the str
// - finally call join ('') on the str
// - the test should pass

//Method 2: Iterative/For Loop Method

// - Create a function that takes in a string parameter (str)
// - declare an empty string variable which will hold the reversed string (let rev = '')
// - initialize a for loop ("for of" loop preferred)
// - for each iteration, loop over each character of the string, which acts like an array (let char of str)
// - add each looped character to the empty string "rev" via concatenation (rev = char + rev, or rev += char)
// - return the final reversed string (return rev)
// - the test should pass

//Method 3: Reduction Method, using Reducer Method

// - Create a function that takes in a string parameter (str)
// - return the following as a single value, the final being: (return str.split('').reduce(())...)
// - call split ('') method on the str
// - call reduce method on the str
// - reduce takes two arguments: an arrow/anon function for the first, and an initial value for the second
// - in this case, the initial value will be an empty string ('')
// - the arrow function will take two arguments: each character in the string (char) and the reversed string (rev)
// - within the arrow function, add the char to rev and return as one value ([return (optional)] char + rev)
// - again, outside the reducer, return all of the above as a single value
// - the test should pass
// - overall, works similar to the iterative method, except all iteration takes place within the reducer