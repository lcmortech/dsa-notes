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