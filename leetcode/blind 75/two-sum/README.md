# Two Sum

This challenge focuses on finding two numbers in an array that add up to a specific target value. The solution should efficiently find the indices of these two numbers using a hash table.

### Example

```javascript
// Example 1
// Input: nums = [3, 2, 4], target = 7
// Output: [1, 2]
// Explanation: nums[1] + nums[2] = 2 + 4 = 7

// Example 2
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: nums[0] + nums[1] = 2 + 7 = 9

// Example 3
// Input: nums = [3, 3], target = 6
// Output: [0, 1]
// Explanation: nums[0] + nums[1] = 3 + 3 = 6
```

## Requirements

- Input: An integer array nums and an integer target.
    - 2 <= nums.length <= 10^4
    - -10^9 <= nums[i] <= 10^9
    - -10^9 <= target <= 10^9
- Output: An array of two integers representing the indices of the numbers that add up to the target.

## Solution

```javascript
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

// Example usage:
let nums = [3, 2, 4];
let target = 7;
console.log(twoSum(nums, target)); // Output: [1, 2]
```

### Explanation

- **Using a Hash Table**: A hash table (or Map) stores the indices of the numbers encountered so far, enabling constant-time lookups.
- **Iterating Through nums**: For each number in nums, the algorithm calculates the complement (target - num) and checks if it already exists in the hash table.
- **Finding a Match**: If the complement exists, it means the current number and the one at the stored index add up to the target. The indices are then returned.
- **Updating the Hash Table**: If no match is found for the current number, it is added to the hash table along with its index for future lookups.

## Testing

To test the function, use the following examples:

```javascript
console.log(twoSum([3, 2, 4], 7)); // Output: [1, 2]
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]
console.log(twoSum([1, 2, 3, 4, 5], 9)); // Output: [3, 4]
console.log(twoSum([0, 4, 3, 0], 0)); // Output: [0, 3]
```

## Additional Notes

This approach leverages the efficiency of hash tables to achieve O(n) time complexity. By iterating through the array once and performing constant-time lookups, the solution avoids the O(n^2) complexity of a nested loop approach.
