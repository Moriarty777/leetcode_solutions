function twoSum(nums, target) {
  let map = {}; // Create a hash map to store numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]; // Calculate the complement

    // Check if the complement exists in the hash map
    if (map[complement] !== undefined) {
      return [map[complement], i]; // Return the indices if found
    }

    // Otherwise, store the current number with its index
    map[nums[i]] = i;
  }

  return []; // If no solution is found (shouldn't happen if input guarantees a solution)
}
