/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {{min: number, max: number}}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  const mergedArr = [...nums1, ...nums2].sort((a, b) => a - b);
  if (mergedArr.length === 0) return { min: null, max: null };

  let min = Math.min(...mergedArr);
  let max = Math.max(...mergedArr);

  return {
    min,
    max,
  };
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([], [3, 4]));
console.log(findMedianSortedArrays([7, 8], [1, 2, 9]));
console.log(findMedianSortedArrays([], []));
console.log(findMedianSortedArrays([5], [5]));
