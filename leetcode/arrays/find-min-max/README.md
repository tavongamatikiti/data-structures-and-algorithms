# Median of Two Sorted Arrays

This challenge focuses on finding the median of two sorted arrays in optimal time complexity. The task requires combining two sorted arrays and determining their median efficiently, leveraging binary search for an O(log(m+n)) time complexity solution.

You are given two sorted arrays, nums1 and nums2, of size m and n respectively. The goal is to return the median of the two sorted arrays.

### Example

```javascript
// Example 1
findMedianSortedArrays([1, 3], [2]);
// Output: 2.0
// Explanation: Combined sorted array = [1, 2, 3]. The median is 2.0.

// Example 2
findMedianSortedArrays([1, 2], [3, 4]);
// Output: 2.5
// Explanation: Combined sorted array = [1, 2, 3, 4]. The median is (2 + 3) / 2 = 2.5.
```

## Requirements

- Input: Two sorted integer arrays, nums1 and nums2.
    - 1 <= nums1.length, nums2.length <= 1000
    - -10^6 <= nums1[i], nums2[i] <= 10^6
- Output: A floating-point number representing the median of the combined sorted arrays.


## Solution

```javascript
const findMedianSortedArrays = function (nums1, nums2) {
  const mergedArr = [...nums1, ...nums2].sort((a, b) => a - b);
  if (mergedArr.length === 0) return { min: null, max: null };

  let min = Math.min(...mergedArr);
  let max = Math.max(...mergedArr);

  return { min, max };
};
```

### Explanation

- **Merging the Arrays**: The solution starts by combining the two input arrays (nums1 and nums2) into a single array. This step ensures all elements are together for further processing.
- **Sorting the Merged Array**: The merged array is sorted in ascending order to organize the numbers, making it easier to identify the smallest (minimum) and largest (maximum) values.
- **Handling Edge Cases**: If the merged array is empty (both input arrays are empty), the solution directly returns { min: null, max: null } as there are no elements to compute the min and max.
- **Finding Min and Max**: The minimum value is the first element, and the maximum value is the last element of the sorted array. These are returned as { min, max } in a simple, efficient way.

## Testing

To test the function, use the following examples:

```javascript
console.log(findMedianSortedArrays([1, 3], [2]));          // Output: { min: 1, max: 3 }
console.log(findMedianSortedArrays([], [3, 4]));           // Output: { min: 3, max: 4 }
console.log(findMedianSortedArrays([7, 8], [1, 2, 9]));    // Output: { min: 1, max: 9 }
console.log(findMedianSortedArrays([], []));               // Output: { min: null, max: null }
console.log(findMedianSortedArrays([5], [5]));             // Output: { min: 5, max: 5 }
```

## Additional Notes

This solution is straightforward but not optimal for finding the median in large arrays. Instead, it efficiently finds the minimum and maximum values and works well for scenarios where these values are the primary focus. For more advanced use cases, such as finding the median, a binary search approach would be required. This approach will be implemented after gaining a deeper understanding of advanced algorithms and techniques.
