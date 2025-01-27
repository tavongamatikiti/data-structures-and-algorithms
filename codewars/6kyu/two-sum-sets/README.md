# Check for Pair with Given Sum

This function checks whether a pair of numbers in an array adds up to a given target sum. The implementation is efficient and leverages a `Set` for constant-time lookups.

## Problem Statement
Given an array of integers `A` and a target sum, determine if there exist two distinct numbers in the array that add up to the target sum. Note that you cannot use the same number twice.

### Example Usage

```javascript
function hasPair(A, sum) {
  if (A.length === 0) return false;

  const newArr = new Set();

  for (const num of A) {
    const targets = sum - num;

    if (newArr.has(targets)) return true;

    newArr.add(num);
  }

  return false;
}

// Example 1
console.log(hasPair([1, 3, 7], 10)); // Output: true (1 + 9 = 10)

// Example 2
console.log(hasPair([-5, -2, 1], -1)); // Output: true (-2 + 1 = -1)

// Example 3
console.log(hasPair([2, 4, 6], 11)); // Output: false (No pair sums to 11)
```

## Algorithm Explanation

1. **Input Validation**: If the array is empty, return `false` immediately.
2. **Using a Set**:
    - Create a `Set` to store numbers we've already processed.
    - For each number in the array, calculate its complement (`sum - num`).
3. **Check for Complement**:
    - If the complement exists in the `Set`, return `true` as the pair exists.
4. **Update the Set**:
    - Add the current number to the `Set` for future complement checks.
5. **Return `false`**:
    - If the loop completes without finding a pair, return `false`.

## Complexity

- **Time Complexity**: O(n)
    - Each element is processed once, and `Set` operations (add and check) are O(1) on average.
- **Space Complexity**: O(n)
    - The `Set` stores at most all elements of the array.

## Edge Cases

- Empty array (`[]`): Returns `false`.
- Array with a single element: Returns `false`, as a pair cannot be formed.
- Multiple valid pairs: The function stops at the first pair it finds.

### Testing

Use the following test cases to validate the function:

```javascript
console.log(hasPair([1, 3, 7], 10)); // true (1 + 9)
console.log(hasPair([-5, -2, 1], -1)); // true (-2 + 1)
console.log(hasPair([2, 4, 6], 11)); // false
console.log(hasPair([], 5)); // false
console.log(hasPair([5], 5)); // false
console.log(hasPair([1, 3, 3, 7], 6)); // true (3 + 3)
```

### Notes

- This implementation assumes the input array is unsorted. If the array is sorted, a two-pointer technique could be used instead for the same O(n) time complexity.
- The `Set` ensures we don’t reuse the same number twice, as required by the problem.

## Real-World Application

This algorithm is useful in scenarios where you need to efficiently check for pairs in datasets, such as:

- Financial transactions (e.g., finding two expenses that match a budget).
- Detecting potential matches in recommendation systems.
- Data validation or filtering tasks.
