//Write a method to replace all spaces in a string with 20%
//Example: 'Mr John Smith' => 'Mr%John%Smith'

//Solution:
function urlify(str) { //str.replace(/ /g, "%20");
    let strCopy = str;
        let len = strCpy.length;
        for (let i = 0; i < len; i++) {
            if (strCopy[i] === ' ') {
                strCopy = `${strCopy.substr(0, i)}%20${strCopy.slice(i + 1)}`; //build new string. Strings are immutable in JS
                len = strCopy.length;
                i += 2; //skip 1 extra chars to reset for loop pointer AFTER %20
            }
        }
        return strCopy;
};

//Solution courtesy of Paul Coroneos