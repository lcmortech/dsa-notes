/*
COMMONLY USED REGEXES
Regexes are immensely helpful for checking the validity of user input in JavaScript. One common type of input check is to validate whether it has any numeric characters.
The following are five regexes that developers often use:

- Any Numeric Characters
/\d+/
1 let reg = /\d+/;
2 reg.test("123"); // true
3 reg.test("33asd"); // true
4 reg.test("5asdasd"); // true 5 reg.test("asdasd"); // false

- Only Numeric Characters
/^\d+$/
1 let reg = /^\d+$/;
2 reg.test("123"); // true
3 reg.test("123a"); // false 4 reg.test("a"); // false
Floating Numeric Characters
   /^[0-9].[0-9][1-9]+$/
1 let reg = /^[0-9].[0-9][1-9]+$/; 2 reg.test("12"); // false
3 reg.test("12.2"); // true

- Only Alphanumeric Characters
   /[a-zA-Z0-9]/
1 let reg = /[a-zA-Z0-9]/;
2 reg.test("somethingELSE"); // true 3 reg.test("hello"); // true
4 reg.test("112a"); // true
5 reg.test("112"); // true
6 reg.test("^"); // false

- Query String
/([^?=&]+)(=([^&]))/
In web applications, web URLs often pass in parameters in the URL for routing or database query purposes.
For example, for the URL http://your.domain/product.aspx?category=4& product_id=2140&query=lcd+tv, the URL might respond to a back-end SQL query like the following:

SELECT LCD, TV FROM database WHERE Category = 4 AND Product_id=2140; To parse these parameters, regexes can be useful.

let uri = 'http://your.domain/product.aspx?category=4&product_id=2140& query=lcd+tv' ;
let queryString = {}; 
uri.replace(
    new RegExp ("([^?=&]+)(=([^&]))?" , "g" ),
    function ($0, $1, $2, $3) { queryString[$1] = $3; }
);
console.log('ID: ' + queryString['product_id' ]); // ID: 2140
console.log('Name: ' + queryString['product_name' ]); // Name: undefined
console.log('Category: ' + queryString['category' ]); // Category: 4
*/