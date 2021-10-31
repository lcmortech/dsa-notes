//Method 1 - Comparitive Method

// - Create a function that takes in a string for its parameter
// - Declare a variable and within it, store the string with the following methods: split, reverse, join
// - Compare the string passed in to the variable reverse, then return (str === rev)
// - If the string is a palindrome, it will evaluaate to True, if not, False
// - the test should pass


//Method 2 - Using the Every Method (Not Ideal) /Double Comparison

// - Create a function that takes in a string for its parameter
// - Return the following: Convert the string to an array, using the split method
// - Use the every method on the string array, which takes two parameters: char and i
// - Using "i" gives us access to the characters in the array,we increment for every index in the array
// - Within the every method function, compare the char to the last letter of the string array
// - We do this by grabbing the index, or i, using str[str.length - i] usually
// - However, having the extra - 1 takes into account the zero indexing of js arrays, so it becomes str[str.length-i-1]
// - After comparing, then return (char === str.str.length - i - 1)
// - If the last letter of the string matches the character, it will evaluate to True, if not, False
// - the test should pass

//Potential Problems with Method 2:
// It's comparing and working twice the amount it needs to
// In other words, it double checks both forwards and backwards, when it's not necessary