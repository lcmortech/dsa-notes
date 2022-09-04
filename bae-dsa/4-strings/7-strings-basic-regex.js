/*
BASIC REGEX
Here are the basic regex rules:

^: Indicates the start of a string/line 
\d: Finds any digit
[abc]: Finds any character between the brackets
[^abc]: Finds any character not between the brackets
[0-9]: Finds any digit between the brackets
[^0-9]: Finds any digit not between the brackets
(x|y): Finds any of the alternatives specified

The following returns 11, which is the index of the character D, which is the first character of the matched regex:
1 - let str = 'Javascript DataStructures'
2 - let n = str.search(/DataStructures/)
3 - console.log(n) //prints '11'
*/