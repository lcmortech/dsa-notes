//BRUTE FORCE SOLUTION

const findTwoSum = function (nums, target) {
    for(let p1 = 0; p1 < nums.length; p1++){ //increments p1 across array
        const numToFind = target - nums[p1]
        for(p2 = p1+1; p2 < nums.length; p2++) { //increments p2 following p1
            if(numToFind === nums[p2]){ //if the number to find is at the position of pointer 2
                return [p1,p2]
            }
        }
    }
    return null
}

/*
Notes:
- Check to make sure there are no typos and spelling errors, cases correct, 
   variables consistent
- All loops are properly closes
- Test the brute force solution against your test cases established earlier
*/

/*
Time complexity = how many iterations need to run to get to solution
Space complexity = only space taken up are by constant variables
TC = O(n2) - Proportional/Dynamic(Quadratic)
SC = O(1) - Constant
*/