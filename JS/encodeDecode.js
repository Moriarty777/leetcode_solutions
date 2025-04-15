class Solution {
  /**
   * Encodes a list of strings to a single string.
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encoded = "";
    for (let str of strs) {
      encoded += str.length + "#" + str;
    }
    return encoded;
  }

  /**
   * Decodes a single string back to a list of strings.
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let decoded = [];
    let i = 0;

    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j++;
      }
      let length = parseInt(str.slice(i, j)); // Extract the length
      let word = str.slice(j + 1, j + 1 + length); // Extract the word
      decoded.push(word);
      i = j + 1 + length; // Move to the next word
    }

    return decoded;
  }
}
