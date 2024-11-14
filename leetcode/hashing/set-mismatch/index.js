/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const n = nums.length;
  const expectedSum = (n * (1 + n)) / 2;
  const seen = new Set();
  let actualSum = 0;
  let duplicates;

  for (let num of nums) {
    if (seen.has(num)) {
      duplicates = num;
    }
    seen.add(num);
    actualSum += num;
  }

  const missing = expectedSum - (actualSum - duplicates);

  return [duplicates, missing];
};

console.log(findErrorNums([1, 2, 3, 2]));
