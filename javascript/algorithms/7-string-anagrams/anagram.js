//Method one
// - Create a function that takes two strings as params
// - Create a character map for the two strings and compare them
// - Create a helper function buildCharMap that takes one string param
// - In the helper function, we declare an object variable called "charMap"
// - Create a for loop let char of str.replace(), whose method takes the reg x statement:/[^\w/g, '']
// - attach the method .toLowerCase to the same str.replace


//Method one example:
//function anagrams(strA, strB) {
//    const aCharMap = buildCharMap(strA);
//    const bCharMap = buildCharMap(strB);
//    
//    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//        return false;
//    }
//    
//    for (let char in aCharMap) {
//        if (aCharMap[char] !== bCharMap[char]){
//            return false;
//        }
//    }
//}