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
