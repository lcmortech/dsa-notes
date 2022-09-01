/*
STRING DECOMPOSITION
- For decomposing a string into parts, you can use .split(separator), which is a great utility function. It takes  one parameter (the seperator), and creates an array of substrings.

let test1 = 'chicken, noodle, soup, broth'
test1.split(',') // ['chicken, noodle, soup, broth']

- Passing an empty separator will create an array of all the characters.

let test1 = 'chicken'
test1.split('') //['c', 'h', 'i', 'c', 'k', 'e', 'n']

- This is useful for when there are items listed in a string. The string can be turned into an array to easily iterate through them.
*/