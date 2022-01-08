//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.

//Optimized Solution
const twoSumMap = () => {
  const numsMap = {};
  for(pointer in nums) {
    const pointerVal = nums[pointer];
    const currMapVal = target - currMapVal.pointerVal;

    if(currMapVal >= 0) {
      return [currMapVal, pointer];
    }
    else {
      const missingVal = target - nums[pointer];
    }
  }
  return null;
};

//Optimized Solution 2
const twoSumMapTwo = (nums, target) => {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
      const another = target - nums[i];

      if (another in map) {
        return [map[another], i];
      }
      map[nums[i]] = i;
    }
    return null;
};

module.exports = twoSumMap;