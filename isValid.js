/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  // Map for matching pairs of brackets
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of s) {
    if (bracketMap[char]) {
      // If it's an opening bracket, push its pair
      stack.push(bracketMap[char]);
    } else {
      // If it's a closing bracket
      if (stack.pop() !== char) {
        return false; // Not a match
      }
    }
  }

  // If the stack is empty, all brackets matched
  return stack.length === 0;
};
