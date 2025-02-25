// The array(A) need to add up to the given sum
// Use Set as you cannot same number twicw

function hasPair(A, sum) {
  if (A.lenght === 0) return false;

  const newArr = new Set();

  for (const num of A) {
    const targets = sum - num;

    if (newArr.has(targets)) return true;

    newArr.add(num);
  }

  return false;
}

console.log(hasPair([1, 3, 7], 10));

console.log(hasPair([-5, -2, 1], -1));

console.log(hasPair([2, 4, 6], 11));
