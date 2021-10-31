//Integer Reversal
// - Create a function that takes in a integer
// - Convert the integer to a string, using the .toString method
// - Repeat the split/reverse/join technique for string reversal
// - Convert the string back to an integer, using the parseInt() method, which takes the string as a parameter
// - Return the integer
// - the test should pass

//Edge Cases: Negative integers
// - Use the Math.sign() method to deal with negative integers
// - Multiply Math.sign(), which takes in the modified reversed int as an argument
// - The integer is negative, Math.sign will return a -1, if positive, 1
// - This will maintain the negative sign for negative integers
// - The test should pass