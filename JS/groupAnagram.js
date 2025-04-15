function groupAnagrams(strs) {
  if (strs.length === 0) {
    return []; // Return an empty array if input is empty
  }

  let map = {}; // Hash map to group anagrams

  for (let str of strs) {
    // Sort the characters of the string to get the "signature"
    let sorted = str.split("").sort().join("");

    // Add the string to the group corresponding to its signature
    if (!map[sorted]) {
      map[sorted] = []; // Initialize if key doesn't exist
    }
    map[sorted].push(str);
  }

  // Return all the grouped anagrams as an array
  return Object.values(map);
}

// function anagram(strs) {
//   let sorted = strs.map((str) => str.split("").sort().join(""));

//   let map = {};

//   for (let i = 0; i < sorted.length; i++) {
//     if (!map[sorted[i]]) {
//       map[sorted[i]] = [strs[i]];
//     } else {
//       map[sorted[i]].push(strs[i]);
//     }
//   }
//   return Object.values(map);
// }
