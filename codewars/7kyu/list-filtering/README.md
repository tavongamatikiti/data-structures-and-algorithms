# Filter List Challenge

## Description

The goal of this challenge is to create a function that filters out all non-numeric values from a list. Given an input list containing both numbers and strings, the function should return a new list containing only the numeric values, preserving their original order.

### Example

```javascript
filter_list([1,2,'a','b'])        // returns [1, 2]
filter_list([1,'a','b',0,15])     // returns [1, 0, 15]
filter_list([1,2,'aasf','1','123',123]) // returns [1, 2, 123]
```

## Requirements

- Input: An array of integers and strings.
- Output: A new array containing only the integers from the input array.

## Solution

```javascript
function filter_list(l) {
  return l.filter((item) => typeof item === "number");
}
```
### Explanation

- The filter method creates a new array with all elements that pass the test implemented by the provided function.
- typeof item === "number" checks if each element is a number.
- Only elements for which the callback returns true are included in the resulting array.

## Testing

To test the function, use the following examples:

```javascript
console.log(filter_list([1,2,'a','b']));        // Expected output: [1, 2]
console.log(filter_list([1,'a','b',0,15]));     // Expected output: [1, 0, 15]
console.log(filter_list([1,2,'aasf','1','123',123])); // Expected output: [1, 2, 123]
```

## Additional notes

- Only integers are expected in the output. If the input contains other types, like floating-point numbers, these should also be filtered out.
- This function does not modify the original array; it returns a new array with only numeric values.

