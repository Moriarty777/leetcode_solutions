var romanToInt = function (s) {
  // Step 1: Create a mapping of Roman numerals to integers
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  // Step 2: Traverse the Roman string from left to right
  for (let i = 0; i < s.length; i++) {
    const currentVal = romanMap[s[i]];
    const nextVal = romanMap[s[i + 1]];

    // Step 3: If the current value is less than the next value, subtract current value
    if (currentVal < nextVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
  }

  return total;
};
