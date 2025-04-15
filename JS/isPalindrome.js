/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let cleanStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // If the cleaned string is empty, return true (handles " " case)
  if (cleanStr.length === 0) {
    return true;
  }

  let left = 0,
    right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] != cleanStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
