function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false; // Length mismatch, not an anagram
  }

  let count = {};

  // Count characters in s
  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  // Subtract characters in t
  for (let char of t) {
    if (!count[char]) {
      return false; // Character not found or count mismatch
    }
    count[char]--;
  }

  return true; // All counts matched
}
