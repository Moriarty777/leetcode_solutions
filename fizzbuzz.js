/**
 * @param {number} n
 * @return {string[]}
 */

var fizzBuzz = function (n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    let str = ""; // Start with an empty string

    if (i % 3 === 0) str += "Fizz"; // Add "Fizz" if divisible by 3
    if (i % 5 === 0) str += "Buzz"; // Add "Buzz" if divisible by 5

    // If str is still empty, use the number
    answer.push(str || i.toString());
  }

  return answer;
};
