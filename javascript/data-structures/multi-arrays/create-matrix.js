function Matrix (rows, columns){
    let newMatrix = new Array(rows)
    for(let value of columns) {
        newMatrix[value] = new Array(columns)
    }

    //for(let i = 0; i < columns; i++){
    //    newMatrix[i] = new Array(rows)
    //}

    return newMatrix
}

console.log(Matrix([1,2,3,4,],[5,6,7,8]))