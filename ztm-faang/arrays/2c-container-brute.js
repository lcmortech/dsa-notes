const getMaxWaterContainer = function(heightsArray) {
    let maxArea = 0
    for(let p1=0; p1 < heightsArray.length; p1++) {
        for(let p2=0; p2 < heightsArray.length; p2++){
            const height = Math.min(heightsArray[p1],heightsArray[p2])
            const width = p1-p2;
            const area = height * width
            maxArea = Math.max(maxArea,area)
        }
    }
    return maxArea
}

/*
FORMULA
min(a, b) * (index of b - index of a)
New max area is now equal to 4
- Repeat loop, replacing the max area with the new one
- We only care about the smaller value (min) in the formula, because the largest is
already a given
*/