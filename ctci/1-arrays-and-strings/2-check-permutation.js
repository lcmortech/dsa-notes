//SOL #1 - Sort the strings
function sort(str){
    let content = s.toCharArray()
    sort(content)
    return content
}

function permutation(s, t){
    if(s.length() != t.length()){
        return false
    }
    return sort(s).equals(sort(t))
}

//SOL #2 - Check if the two strings have identical character counts
function permutation(s, t) {
    if(s.length() != t.length()) return false

    let letters = 128
    for(let i = 0; i < s.length; i++){
        if(letters[t.charAt(i)] < 0){
            return false
        }
    }
    return true //since letters has no neg values, it has no positive values either
}