//TWO SUM

//QUESTIONS TO ASK
//1. Are all the numbers positive or negative? (All are positive)
//2. Are there duplicate numbers? (No)
//3. Will there always be a solution available? (No)
//4. What do we return if there is no solution? (Null)
//5. Can there be multiple pairs that add up to that target value? (No)

//TEST CASES
//[1,3,7,9] t=11 (Return [3,4])
//EDGE CASES
//[1,3,7,9,2] t=25 (No solution. Return null)
//[] t= 1 (No solution. Return null)
//[5] t=5 (No solution. Return null)
//[1,6] t=7 (Return [0,1])

/*
        0 1 2 3 4
nums = [1,3,7,9,2] t = 11
        p1, p2
p1 = pointer 1, first position in array to test every combo
p2 =  pointer 2, the other number tested/determined in the pair


number to find = target minus value at p1 (t - nums[p1])
10 = 11 - 1 (No solution where 1 is part of the final answer. Move pointer to next position in array)
8 = 11 - 3 (No solution where 3 is part of the final answer. Move pointer to next position in array)
4 = 11 - 7 (No solution where 7 is part of the final answer. Move pointer to next position in array)
2 = 11 - 9 (Found the solution. Return [p1, p2])
*/