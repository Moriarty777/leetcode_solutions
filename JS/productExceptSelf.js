/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let n = nums.length;
  let output = new Array(n).fill(1);

  // Step 1: Compute prefix product
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    output[i] = prefix;
    prefix *= nums[i]; // Update prefix for next iteration
  }

  // Step 2: Compute suffix product and multiply
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= suffix; // Multiply by suffix product
    suffix *= nums[i]; // Update suffix for next iteration
  }

  return output;
};
