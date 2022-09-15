/*
HELPER FUNCTIONS

The following sections discuss other commonly used helper functions for processing. In addition, working with arrays will be covered.

//.slice(begin, end)
This helper function returns a portion of an existing array. .slice takes two parameters: the beginning index and the ending index of the array.

let array1 = [1,2,3,4]
array1.slice(1,2) //returns 2
array1.slice(2,4) //returns [3,4]
array1 = [1,2,3,4]

If only the beginning index is passed, the ending will be assumed to be the maximum index.

array1.slice(1) //returns [2,3,4]
array1 = [1,2,3,4]
array.slice(1,4) //returns [2,3,4]
array1 = [1,2,3,4]
*/