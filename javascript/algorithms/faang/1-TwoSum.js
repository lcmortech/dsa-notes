//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.

//Brute Force Solution
const TwoSum = (nums, target) => {
    for(p1 in nums) {
        const missingVal = target - nums[p1];

        for (p2 in nums) {
            missingVal ? nums[p2] : 
        }
    }
}

module.exports = TwoSum