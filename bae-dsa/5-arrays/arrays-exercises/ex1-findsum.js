/*
Problem: Given the array arr, find and return two indices of the array that add up to weight or return -1 if there is no combination that adds up to weight.
*/

function findSum(array, target){
    for(let i in array){
        for(let j in i){
            if(i + j === target){
                return [i,j]
            }
            else {
                return 'not found'
            }
        }
    }
}

findSum([1,2,3,4],7)