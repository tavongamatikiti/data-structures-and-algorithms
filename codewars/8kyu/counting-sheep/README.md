# Counting Sheep

## Description

The goal of this challenge is to create a function that counts the number of present sheep in a list. In the list, each item represents a sheep's presence, with true indicating a sheep is present and false indicating a sheep is missing. The function should return the total count of true values in the array.

## Example

```javascript
count_sheep([
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
]);
// returns 17
```

## Requirements

- Input: An array containing boolean values (true and false), where true indicates the presence of a sheep and false indicates its absence.
- Output: A number representing the total count of true values in the array.

## Solution

Here is the possible solution:

```javascript
function count_sheep(arrayOfSheep) {
  return arrayOfSheep.filter((sheep) => sheep === true).length;
}
```

### Explanation

- Filter Present Sheep: arrayOfSheep.filter(sheep => sheep === true) creates a new array containing only true values from the input array.
- Count the Sheep: .length returns the count of true values in the filtered array, representing the number of present sheep.

## Testing

To test the function, use the following examples:

```javascript
console.log(
  count_sheep([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ]),
);
// Expected output: 17

console.log(count_sheep([false, false, false, false])); // Expected output: 0
console.log(count_sheep([true, true, true, true])); // Expected output: 4
```

## Additional Notes

- The function assumes the input is an array of boolean values.
- If the array contains any non-boolean values, they are ignored in the count.
- This function does not modify the original array; it returns the count of true values as an integer.
