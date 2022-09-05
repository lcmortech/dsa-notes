/*
COMMONLY USED REGEXES
Regexes are immensely helpful for checking the validity of user input in JavaScript. One common type of input check is to validate whether it has any numeric characters.
The following are five regexes that developers often use.
Chapter 4 JavaSCript StringS
39


//Any Numeric Characters
/\d+/
1 var reg = /\d+/;
2 reg.test("123"); // true
3 reg.test("33asd"); // true
4 reg.test("5asdasd"); // true 5 reg.test("asdasd"); // false

//Only Numeric Characters
/^\d+$/
1 var reg = /^\d+$/;
2 reg.test("123"); // true
3 reg.test("123a"); // false 4 reg.test("a"); // false
Floating Numeric Characters
   /^[0-9].[0-9][1-9]+$/
1 var reg = /^[0-9].[0-9][1-9]+$/; 2 reg.test("12"); // false
3 reg.test("12.2"); // true

//Only Alphanumeric Characters
   /[a-zA-Z0-9]/
1 var reg = /[a-zA-Z0-9]/;
2 reg.test("somethingELSE"); // true 3 reg.test("hello"); // true
4 reg.test("112a"); // true
5 reg.test("112"); // true
6 reg.test("^"); // false

*/