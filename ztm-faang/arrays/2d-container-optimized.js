const getMaxWaterContainer = function(heights){ 
    let pi=0, p2 = heights.length-1,maxArea = 0;
    while (p1 , p2) {
        const height = Math.min(heights[p1],heights[p2])
        const width = p2 - p1
        const area = height * width
        maxArea = Math.max(maxArea, area)
        if(heights[p1]<= heights[p2]){
            p1++
        } else {
            p2--
        }
    }
    return maxArea
}

/*
Here, the runtime becomes O(n), due to being cut down to one loop
- This is also our first introduction to the "two pointer" method of traversing an array
- Like in the brute solution, we loop through until we get the last element for b,
followed by the last element for a in the formula.
area = min(a,b) * (bi - ai)
        left element * width
width equal to the index of b, subtracted by the index of a
*/