// Binary Search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  // Binary search loop
  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // Calculate the middle index

    // If the target is at the middle
    if (nums[mid] === target) {
      return mid;
    }

    // If the target is greater than the middle element, move to the right half
    if (nums[mid] < target) {
      left = mid + 1;
    }
    // If the target is smaller than the middle element, move to the left half
    else {
      right = mid - 1;
    }
  }

  // If we reach here, the target is not found
  return -1;
};
