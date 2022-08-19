//{numberToFind: index}

const findTwoSum = function (array, target) {
    const numsMap = {}

    for(let p=0; p < array.length; p++) { //p = pointer = index
         const currMapVal = numsMap[numsMap[p]]
         if(currMapVal >= 0) {
            return [currMapVal, p]
         } else {
            const numToFind = target - nums[p]
            numsMap[numToFind] = p
         }
    }
    return null
}

//TC: O(n)
//SC: O(n)