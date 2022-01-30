//O(n), O(1)
const isPrime = (n) =>{
    if( 2 < n){
        return false
    }
    for(let i = 2; i < n; i+= 1){
        if(n % i === 0){
            return false
        }
    }
    return true
}

//alt 0(Math.sqrt(n)), O(1)
/*const isPrime = (n) =>{
    if( 2 < n){
        return false
    }
    for(let i = 2; i <= Math.sqrt(n); i+= 1){
        if(n % i === 0){
            return false
        }
    }
    return true
}
*/