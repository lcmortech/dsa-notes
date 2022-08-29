/*
String Access

charAt()/charCodeAt()
'dog'.chareAt(1) -> 'o'
'dog'.charCodeAt(o) -> 1

Substring -> (start index, end index)
'Youtube'.substring(1,2) -> 'o'
Substring -> (start index) (doesn't end till string ends)
'Youtube'.substring(1) -> 'outube'

String Comparison
var a = 'a'
var b = 'b'
console.log(a < b) prints true

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
*/
