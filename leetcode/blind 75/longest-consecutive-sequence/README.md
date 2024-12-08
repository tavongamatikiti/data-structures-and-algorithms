# Longest Consecutive Sequence

This challenge focuses on finding the length of the longest consecutive elements sequence in an unsorted array of integers. The solution should achieve an O(n) time complexity.

You are given an integer array nums. The goal is to return the length of the longest consecutive elements sequence, ensuring that the solution handles large inputs efficiently.

### Example

```javascript
// Example 1
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive sequence is [1, 2, 3, 4], which has a length of 4.

// Example 2
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
// Explanation: The longest consecutive sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8], which has a length of 9.
```

## Requirements

- Input: An integer array nums.
  - 0 <= nums.length <= 10^5
  - -10^9 <= nums[i] <= 10^9
- Output: An integer representing the length of the longest consecutive elements sequence in the array.

## Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  const numSet = new Set(nums);
  let longestSequence = 0;

  for (const num of nums) {
    // Only start counting if 'num - 1' is not in the set,
    // which means 'num' could be the start of a sequence.
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Increment the sequence while consecutive numbers exist
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestSequence = Math.max(longestSequence, currentStreak);
    }
  }

  return longestSequence;
};
```

### Explanation

- **Using a Set**: By inserting all the numbers into a Set, we can quickly check for the existence of consecutive elements. This ensures that all in or has operations are O(1) on average.
- **Identifying Sequence Starts**: To find the longest sequence, the algorithm identifies potential starts of consecutive sequences. A number num is considered a start if num - 1 is not present in the set, meaning num could be the beginning of a consecutive run.
- **Counting the Sequence Length**: Once a start is identified, the code increments currentNum and checks for each subsequent number (currentNum + 1) in the set. This process continues until the sequence is no longer consecutive.
- **Updating the Longest Sequence**: After finding the length of one consecutive sequence, the algorithm updates the longestSequence if the current sequence is longer than any previously recorded one.

## Testing

To test the function, use the following examples:

```javascript
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // Output: 9
console.log(longestConsecutive([])); // Output: 0 (no elements)
console.log(longestConsecutive([1])); // Output: 1 (only one element)
console.log(longestConsecutive([1, 2, 0, 1])); // Output: 3 (the sequence [0,1,2])
```

## Additional Notes

This approach leverages the strength of constant-time lookups provided by a hash set. By ensuring that each element in nums is processed at most twice (once when checking if it’s a start and a few times while counting the consecutive numbers), the solution achieves the O(n) complexity.
