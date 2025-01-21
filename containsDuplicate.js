function containsDuplicate(nums) {
  let seen = new Set(); // Create a Set to store unique numbers

  for (let num of nums) {
    // Loop through each number in the array
    if (seen.has(num)) {
      // Check if the number is already in the set
      return true; // If yes, a duplicate exists
    }
    seen.add(num); // If no, add the number to the set
  }
  return false; // No duplicates found
}
