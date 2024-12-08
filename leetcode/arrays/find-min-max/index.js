/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {{min: number, max: number}}
 */
const findMinMax = function (nums1, nums2) {
  const mergedArr = [...nums1, ...nums2].sort((a, b) => a - b);
  if (mergedArr.length === 0) return { min: null, max: null };

  let min = Math.min(...mergedArr);
  let max = Math.max(...mergedArr);

  return {
    min,
    max,
  };
};

console.log(findMinMax([1, 3], [2]));
console.log(findMinMax([], [3, 4]));
console.log(findMinMax([7, 8], [1, 2, 9]));
console.log(findMinMax([], []));
console.log(findMinMax([5], [5]));
