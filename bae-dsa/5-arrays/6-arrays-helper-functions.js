/*
HELPER FUNCTIONS

The following sections discuss other commonly used helper functions for processing. In addition, working with arrays will be covered.

====
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

If nothing is passed, this function simply returns a copy of the array. It should be noted that array1.slice() === array1 evaluates to "false". This is because although the contenfs of the array are the same, the memory addresses at which those arrays reside are different.
array1.slice() //returns [1,2,3,4]

This is useful for copying an array in Javascript. Remember that arrays in Javascript are reference-based, meaning that if you assign a new variable to an array, changes to that variable apply to the original array.

let array1 = [1,2,3,4]
array2 = array1

array1 //[1,2,3,4]
array2 //[1,2,3,4]

array2[0] = 5

array1 //[5,2,3,4]
array2 //[5,2,3,4]


====
//.from()
The changing element of array2 changed the original array by accident because it is a reference to the original array. To create a new array, you can use .from().

let array1 = [1,2,3,4]
let array2 = Array.from(array1)

array1 //[1,2,3,4]
array2 //[1,2,3,4]

array2[0] = 5

array1 //[1,2,3,4]
array2 //[5,2,3,4]

.from() takes O(n), where n is the size of the array. This is intuitive because copying the array requires all n elements of the array.

====
//.splice(begin, size, element1, element2...)
This helper function returns and changes the contents of an array by removing existing elements, and/or adding new elements.

.splice() takes three parameters: the beginning index, the size of things to be removed, and the new elements to add. New elements are added at the position specified by the first parameter. It returns the removed elements.
*/