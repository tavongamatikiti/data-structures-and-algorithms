# Sentence Smash

## Description

The Sentence Smash function takes an array of words and "smashes" them together into a single sentence. Words in the sentence are separated by spaces, but there are no leading or trailing spaces. Punctuation or sanitation is not required.

## Example

```javascript
smash(["hello", "world"]); // returns "hello world"
smash(["this", "is", "a", "test"]); // returns "this is a test"
smash([]); // returns ""
```

## Requirements

- Input: An array of strings (words).
- Output: A single string that contains all words from the input array, separated by a single space.

## Solution

Here is the possible solution:

```javascript
function smash(words) {
  return words.join(" ");
}
```

### Explanation

- The join method joins all elements of an array into a single string, inserting the specified separator (a single space in this case) between each word.
- By using join(' '), there will be no extra spaces at the beginning or end of the sentence.
- If the input array is empty, join returns an empty string.

## Testing

To test the function, use the following examples:

```javascript
console.log(smash(["hello", "world"])); // Expected output: "hello world"
console.log(smash(["this", "is", "a", "test"])); // Expected output: "this is a test"
console.log(smash([])); // Expected output: ""Expected output: [1, 2, 123]
```

## Edge cases

- If the input array is empty, the function should return an empty string.
- No need to handle punctuation, special characters, or case conversion as per the instructions.

