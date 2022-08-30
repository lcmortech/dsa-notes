/*
String Search - 

indexOf: To find a specific string within a string, you can use .indexOf(searchValue[, fromIndex]). This takes a parameter that is the string to be searched as well as an optional parameter for the starting index for the search. It returns the position of the matching string, but if nothing is found, then -1 is returned. Note that this function is case sensitive.

'Red Dragon'.indexOf('Red') // returns 'o'
'Red Dragon'.indexOf('Red'); // returns 0
'Red Dragon'.indexOf('RedScale'); // returns -1 3 
'Red Dragon'.indexOf('Dragon', 0); // returns 4
'Red Dragon'.indexOf('Dragon', 4); // returns 4
'Red Dragon'.indexOf(", 9); // returns 9

startsWith()/endsWith(): Finally, startsWith returns true (boolean) if the string starts with the specified input, and endsWith checks whether the string ends with the specified input.
'Red Dragon'.startsWith('Red'); // returns true
'Red Dragon'.endsWith('Dragon'); // returns true
'Red Dragon'.startsWith('Dragon'); // returns false
'Red Dragon'.endsWith('Red'); // returns false

- To check for the occurence of a search string inside a larger stirng, simply check whether -1 was returned from .indexOf.

function existsInString(stringValue, search){
    return stringValue.indexOf(search) !== -1
}

- You can use an additional parameter to search adter a certain index in a string. An example is counting occurences of certain letters. In the following example, the occurences of the character 'a' will be counted

let str = 'He's my king, from this day until his last day.'
let count = 0
let pos = str.indexOf('a)

while (pos !== 1){
    count++
    pos = str.indexOf('a', pos + 1)
}

Finally, startsWith returns true(a boolean values) if the string starts with the specified input, and endsWith checks whether the string ends with the specified input.

'Red Dragon' .startsWith('Red') //returns true
'Red Dragon' .endsWith('Dragon') //returns true
'Red Dragon' .starts\With('Dragon') //returns false
'Red Dragon' .endsWith('Red') //returns false
*/