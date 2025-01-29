# Minutes to Midnight

This function calculates the number of minutes remaining until midnight from a given `Date` object.

## Problem Statement

Given a `Date` object, determine how many minutes are left until midnight (00:00) of the next day. The result should be rounded to the nearest whole number and formatted as a string indicating "minute" or "minutes" appropriately.

### Example Usage

```javascript
function minutesToMidnight(d) {
  const curr = d.getTime();

  const midnight = new Date(
    d.getFullYear(),
    d.getMonth(),
    d.getDate() + 1,
    0,
    0,
    0,
  );

  const diff = midnight - curr;

  const timeLeft = Math.round(diff / (1000 * 60));

  const text = timeLeft === 1 ? "minute" : "minutes";

  return `${timeLeft} ${text}`;
}

// Example
console.log(minutesToMidnight(new Date('2024-06-10T23:30:00'))); // Output: "30 minutes"
console.log(minutesToMidnight(new Date('2024-06-10T23:59:30'))); // Output: "1 minute"
console.log(minutesToMidnight(new Date('2024-06-10T00:00:00'))); // Output: "1440 minutes"
```

## Algorithm Explanation

1. **Get Current Time**: Convert the input `Date` object into milliseconds since the epoch.
2. **Calculate Midnight**: Construct a new `Date` object representing midnight of the next day.
3. **Find Time Difference**: Compute the difference in milliseconds between the current time and midnight.
4. **Convert to Minutes**: Divide the difference by `1000 * 60` to get minutes and round to the nearest whole number.
5. **Format Output**: Return the result as a string with appropriate singular/plural wording.

## Complexity

- **Time Complexity**: O(1) - The function performs a few mathematical operations and date manipulations, which take constant time.
- **Space Complexity**: O(1) - No additional data structures are used.

## Edge Cases

- The function correctly handles cases when it is exactly midnight (`00:00`), returning `1440 minutes` for a full day ahead.
- If the function is called at `23:59:30`, it correctly rounds up to `1 minute`.
- Works correctly for any given date, regardless of time zone settings.

## Real-World Application

This function is useful in scenarios where time tracking is required, such as:

- Countdown timers for daily events.
- Scheduling applications that need to calculate time until reset.
- Time-sensitive notifications or reminders before a daily deadline.

