# Abbreviate a Two Word Name

## Description

The objective of this challenge is to create a function that takes a two-word name and returns the initials of each word capitalized, separated by a period. Given a string with exactly two words separated by a space, the function should return the initials in uppercase format.

## Example

```javascript
abbrevName("John Doe"); // returns "J.D"
abbrevName("Patrick Feeney"); // returns "P.F"
abbrevName("Sam Smith"); // returns "S.S"
```

## Requirements

- Input: A string containing exactly two words, separated by a single space.
- Output: A string containing the initials of each word, capitalized and separated by a period.

## Solution

Here is the possible solution:

```javascript
function abbrevName(name) {
  const initials = name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(".");
  return initials;
}
```

### Explanation

- Split the name: name.split(" ") splits the input string into an array of two words.
- Get Initials: .map(word => word[0].toUpperCase()) extracts the first letter of each word and converts it to uppercase.
- oin with Period: .join(".") combines the initials with a period in between to form the result.
- 
## Testing

To test the function, use the following examples:

```javascript
console.log(abbreviate_name("John Doe"));        // Expected output: "J.D"
console.log(abbreviate_name("Patrick Feeney"));   // Expected output: "P.F"
console.log(abbreviate_name("Sam Smith"));        // Expected output: "S.S"
```

## Additional Notes

- The function assumes the input will always be two words, each with at least one character.
- The input should not include any numbers or special characters within the names.
- The function does not modify the original string; it returns a new string with the formatted initials.
