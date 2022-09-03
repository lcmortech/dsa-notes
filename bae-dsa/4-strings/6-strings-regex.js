/*
REGULAR EXPRESSIONS
- Regular expressions(regexes) are a set of characters that define a search pattern. Learning how to use regexes is a massive task of its own, but as a javascript developer, it is important you know the basics of regexes.
- Javascript also comes with the native object RegExp, which is used for regular expressions.
- The constructor for the RegExp object takes two parameters: the regular expression and the optional match settings, as shown here:

i - Perform case-insensitive matching
g - Perform a global match (find all matches rather than stopping after first match)
m - Perform multiline matching

RegExp has the following functions:
- search(): Tests for matches in a string. This returns the index of a match.
- match(): Tests for matches. This returns all the matches.

The Javascript object also has the following two regex related functions and accept the RegEx object as an argument:
- exec(): Tests for matches in a string. This returns the first match.
- test(): Tests for matches in a string. This returns true or false. 
*/