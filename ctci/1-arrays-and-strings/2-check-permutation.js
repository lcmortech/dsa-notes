//SOL #1
//First - Sort the string
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
