/*
BASE64 ENCODING
The btoa() function creates a Base64-encoded ASCII string from a string. Each character in the string is treated as a byte (8 bits: eight 0 and 1s).
The .atob() function decodes a string of data that has been encoded using Base64 encoding. For example, the string “hello I love learning to computer program” in a Base64-encoded string looks like this: aGVsbG8gSSBsb3ZlIGxlYXJuaW5nIHRvIGNvbXB 1dGVyIHByb2dyYW0.

1 btoa('hello I love learning to computer program');
2 // aGVsbG8gSSBsb3ZlIGxlYXJuaW5nIHRvIGNvbXB1dGVyIHByb2dyYW0
1 atob('aGVsbG8gSSBsb3ZlIGxlYXJuaW5nIHRvIGNvbXB1dGVyIHByb2dyYW0'); 2 // hello I love learning to computer program
Learn more about Base64 at https://en.wikipedia.org/wiki/Base64.
*/