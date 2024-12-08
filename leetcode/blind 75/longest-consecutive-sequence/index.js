/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  const numSet = new Set(nums);
  let longestSequence = 0;

  for (const num of nums) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestSequence = Math.max(longestSequence, currentStreak);
    }
  }

  return longestSequence;
};
