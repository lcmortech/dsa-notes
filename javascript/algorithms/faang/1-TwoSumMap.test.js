const twosum = require('./1-TwoSumMap');


//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

test('returns the indices of two numbers that add up to the target',() =>{
    expect(twosum([2,7,11,15], 9)).toBe([0,1])
} )