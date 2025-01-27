/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const hashTable = new Map();

  if (nums.length === 0) return false;

  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i];
    const sum = target - num;

    if (hashTable.has(sum)) {
      return [hashTable.get(sum), i];
    }

    hashTable.set(num, i);
  }
};

let nums = [3, 2, 4];
let target = 7;
