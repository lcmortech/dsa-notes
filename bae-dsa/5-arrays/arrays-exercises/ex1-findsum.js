/*
Problem: Given the array arr, find and return two indices of the array that add up to weight or return -1 if there is no combination that adds up to weight.
*/

function findSum(arr, t){
    for(let i in arr){
        for(let j in i){
            if(i + j === t){
                return [i,j]
            }
            else {
                return 'not found'
            }
        }
    }
}

module.exports = findSum




/*
This solution iterates through an array looking to see whether a matching pair exists.
Two for loops over n elements of the array yields a high time complexity. However, no extra memory was created. Similar to how time complexity describes the time required relative to input size, n, to finish the algorithm, the space complexity describes the additional memory needed for implementation. The space complexity, O(1), is constant.
Time Complexity: O(n2)
Space Complexity: O(1)

Let's think about how to do this in lineat time of O(n).
What if any previously seen array elements were stored and could be checked easily?
Here's the input:
let arr = [1,2,3,4,5]
let weight = 9
*/

findSum([1,2,3,4],7)