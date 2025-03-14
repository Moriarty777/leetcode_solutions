/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = {};

  // Step 1: Count the frequency of each number
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  // Step 2: Sort numbers based on frequency in descending order
  let sorted = Object.keys(map).sort((a, b) => map[b] - map[a]);

  // Step 3: Return the top k elements
  return sorted.slice(0, k).map(Number);
};
