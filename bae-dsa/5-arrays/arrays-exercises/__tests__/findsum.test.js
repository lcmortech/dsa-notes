const findSum = require('../findsum')
//import findSum from '../ex1-findsum.js'

//in order to write a test with jest, we use
///first param is just a string of what the test is doing
//will be displayed in console
//second param is the function called to run test
test('Finds two numbers in an array that adds up to the target',()=>{
    expect(findSum([1,2,3], 5))
    .toBe([2,3])
})