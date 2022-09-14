function findSum(array, target){
    for(let i in array){
        for(let j in i){
            if(i + j === target){
                return [i,j]
            }
            else {
                return 'not found'
            }
        }
    }
}

findSum([1,2,3,4],7)