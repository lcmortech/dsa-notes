function arraySlice(array, startIndex, endIndex) {
    //if no params passed, return the array
    if(!startIndex && !endIndex){
        return array
    }

    //if only startIndex found, set endIndex to size
    endIndex = array.length

    let partArray = []

    //If both startIndex and endIndex found, return the part of the     array
    for(let i = startIndex; i < endIndex; i++) {
        partArray.push(array[i])
    }
    return partArray
}

//Test cases:
arraySlice([1,2,3,4], 1, 2) //[2]
arraySlice([1,2,3,4],2,4) //[3,4]

//Time Complexity: O(n)
//Space Complexity: O(n)

module.exports = arraySlice;