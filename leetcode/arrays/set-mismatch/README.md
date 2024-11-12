# Set Mismatch Challenge

The goal of this challenge is to identify two specific numbers in a list that should contain all integers from
1
1 to
n
n but has one duplicated number and one missing number due to an error. Given an input array nums, which represents the list with one duplicated and one missing value, the function should return an array containing the duplicated number and the missing number.

### Example

```javascript
setMismatch([1, 2, 2, 4])        // returns [2, 3]
setMismatch([1, 1])              // returns [1, 2]
setMismatch([3, 2, 2, 4, 5])     // returns [2, 1]
```

## Requirements

- Input: An integer array nums where 1 <= nums[i] <= n and nums has a length of n.
- Output: An array of two integers [duplicated, missing]:
    - duplicated: the number that appears twice.
    - missing: the number that should have been in the array but is missing.


## Solution

```javascript
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
```

### Explanation

- Calculate expectedSum as the sum of numbers from 1 to n using the formula (n * (n + 1)/2)
- Set up a Set called seen to track numbers as they appear in nums, a variable actualSum to store the total of all numbers in nums, and duplicates to store the duplicated number once found.
- Loop through nums, adding each number to seen. If a number is already in seen, it’s the duplicate, stored as duplicates. Accumulate all numbers in nums to actualSum.
- Compute the missing number as expectedSum - (actualSum - duplicates). This adjusts for the duplicated number to reveal the missing one. Finally, return [duplicates, missing].

## Testing

To test the function, use the following examples:

```javascript
console.log(setMismatch([1, 2, 2, 4]));        // Expected output: [2, 3]
console.log(setMismatch([1, 1]));              // Expected output: [1, 2]
console.log(setMismatch([3, 2, 2, 4, 5]));     // Expected output: [2, 1]
console.log(setMismatch([1, 2, 3, 4, 4]));     // Expected output: [4, 5]
```

## Additional Notes

- **Time Complexity**: This solution has a time complexity of O(n)  since it requires only a single pass through the array.
- **Space Complexity**: The solution uses O(1) extra space.
- **Edge Cases**:

    - The smallest or largest number could be duplicated.
    - Only two elements in nums.
    - Random ordering of elements in nums.
