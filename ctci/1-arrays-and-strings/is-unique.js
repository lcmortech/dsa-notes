//1.1 IsUnique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

/*
General Notes:
- One solution is to create an array of booleans(t/f), where the flag(pointer) at index i (O(n)) indicates where character i in the alphabet is contained in the string. The second time you see that character for i, you can return false.
- We can also immediately return false if the string length exceeds the number of unique characters in the alphabet. After all, you can't form  a string of 280 unique characters out of a 128-character alphabet.

* It's also okay to assume 256-characters. This would be the case in extended ASCII. You should clarify your assumptions with your interviewer.

- The code below implements the above algorithm.
*/

function isUniqueChar(str){
    char_set = []
    
    for(let i in str){
        let val = str.charAt(i)
        if(char_set[val]) {
            return false
        } else {
            char_set[val] = true
        }
    }
    return true
}

isUniqueChar('happy days')
isUniqueChar('silver spoon')
isUniqueChar('buckwheat84')

//TC: O(n)
//SC: O(1) - fixed array, O(n) - dynamic array

//BIT VECTOR SOLVE

function isUniqueCharBit(str) {
    let checker = 0
    for (let i = 0; i < str.length; i++){
        let val = str.charAt(i) - 'a'
        if((checker & (1 << val)) > 0){
            return false
        } else{
            checker |= (1 << val)
        }
    }
    return true
}

isUniqueCharBit('happy days')
isUniqueCharBit('silver spoon')
isUniqueCharBit('buckwheat84')

//TC: O(n log(n))
//SC: O(1)