//Array Chunking

//Steps at a glance:
// - Create empty array variable to hold chunks
// - Using a for loop ('for each element'), retrieve each element in the 'unchunked' array.
// - Retrieve the last element in 'chunked'.
// - Check to see if the last element does not exist, or if its length is equal to chunk size. 
// - If so(if), push a new chunk into 'chunked' with the current element.
// -  Otherwise(else), add the current element into the chunk.

/* First Attempt
const chunkArray = (arr) => {
    let chunked = [];

    for(let char of arr){
        if (!chunked[chunked.length-1] ||  chunked[chunked.length-1] === chunked.length) {
            chunked.push(char);
        } else {
        
        }
          
    }
} */

//Method 1 In-Depth:
// - Function takes two parameters
// - We assume our chunk function gets called on an array with 3 elements inside
// - We begin to iterate over our original unchunked array
// - For each element in unchunked array:
// - Retrieve the last element in the new chunked array (will be empty the first time around)
// - If it is indeed empty/doesn't exist OR equal to chunked size, we will push a new subarray/chunk into the chunk array,
// - along with the current char/element we're iterating through inside the new subarray/chunk
// - In our next iteration, we go down to the else case (current chunk not yet full): add the current element into the new subarray/chunk,
// - making it the last element in our new chunk subarray
// - the test should pass

//Example:
//function chunk(arr, size) {
//    const chunked = [];
//    
//    for (let element of arr) {
//        const last = chunked[chunked.length - 1];
//        
//        if(!last || last.length === size) {
//            chunked.push([element]);
//        } else {
//            last.push(element);
//        }
//    }
//    
//    return chunked;
//}

//Method 2 Slice Method:

//letters.slice(0,3)
//start index, second arg ending index (exclusive, so it only returns up to index 2 in this instance)
//does not include index 3

//Steps:
// - Create empty 'chunked' array
// - Create 'index' at 0
// - While index is less than array.length
// -- Push a slice of length 'size' from 'array' into 'chunked'
// -- Add 'size' to 'index' of 'chunked'

//Method 2 Slice Example:

//function chunk(arr, size) {
//    const chunked = [];
//    let index = 0; //use let since it will change over time
//    
//    while (index < arr.length) {
//      chunked.push(arr.slice(index, index + size));
//      index += size;
//    }
//    
//    return chunked;
//}

//module.exports = chunk;